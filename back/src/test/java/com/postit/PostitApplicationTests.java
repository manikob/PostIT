package com.postit;

import com.postit.dto.PostItDto;
import com.postit.testmodel.PagePostIt;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.After;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = {"classpath:application-test.properties"})
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class PostitApplicationTests {

    private static final String testContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    private static final String toLongTestContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    @Value("${local.server.port}")
    protected int serverPort;
    @Value("${server.servlet.context-path}")
    private String configuredContextPath;

    @Before
    public void setUp() {
        RestAssured.port = serverPort;
        RestAssured.basePath = configuredContextPath;
    }

    @After
    public void cleanDatabase() {
        PagePostIt page = given().get("/").as(PagePostIt.class);
        page.getContent().forEach(note -> {
            given().delete("/" + note.getId()).then().statusCode(HttpStatus.OK.value());
        });
    }

    @Test
    public void createNoteTest() {
        Response resp = given().post("/").thenReturn();
        assertEquals(HttpStatus.OK.value(), resp.getStatusCode());
        PostItDto dto = resp.getBody().as(PostItDto.class);
        assertNotNull(dto);
        assertNotNull(dto.getId());
        assertNull(dto.getContent());
    }

    @Test
    public void updateNoteTest() {
        // create one
        PostItDto dto = given().post("/").as(PostItDto.class);
        assertNotNull(dto);

        // update content
        dto.setContent(testContent);
        Response resp = given().contentType(ContentType.JSON).body(dto).put("/").thenReturn();
        assertEquals(HttpStatus.OK.value(), resp.getStatusCode());
        PostItDto dtoAfter = resp.getBody().as(PostItDto.class);
        assertEquals(dtoAfter.getContent(), testContent);

        // and get it once again to comparison
        PostItDto dtoFromGet = given().get("/" + dtoAfter.getId()).as(PostItDto.class);
        assertNotNull(dtoFromGet);
        assertEquals(dtoFromGet.getId(), dto.getId());
        assertEquals(dtoFromGet.getContent(), testContent);
    }

    @Test
    public void tryUpdateToLongContentTest() {
        // create one
        PostItDto dto = given().post("/").as(PostItDto.class);
        assertNotNull(dto);

        dto.setContent(toLongTestContent);
        given().contentType(ContentType.JSON).body(dto).put("/").then().statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
    }

    @Test
    public void tryUpdateNonExistingTest() {
        PostItDto dto = PostItDto.builder().id(9999L).content(testContent).build();
        given().contentType(ContentType.JSON).body(dto).put("/").then().statusCode(HttpStatus.NO_CONTENT.value());
    }

    @Test
    public void deleteNotesTest() {

        //create few notes
        for (int idx = 0; idx < 5; idx++) {
            given().post("/").then().statusCode(HttpStatus.OK.value());
        }

        this.cleanDatabase();

        PagePostIt page = given().get("/").as(PagePostIt.class);
        assertEquals(0, page.getNumberOfElements());
    }

    @Test
    public void tryDeleteNonExisting() {

        given().delete("/9999").then().statusCode(HttpStatus.NO_CONTENT.value());
    }

    @Test
    public void simpleGetTest() {
        Response resp = given().post("/").thenReturn();
        assertEquals(HttpStatus.OK.value(), resp.getStatusCode());
        PostItDto dto = resp.getBody().as(PostItDto.class);

        PostItDto dtoFromGet = given().get("/" + dto.getId()).as(PostItDto.class);
        assertNotNull(dtoFromGet);
        assertEquals(dto.getId(), dtoFromGet.getId());
    }

    @Test
    public void tryGetNonExistingTest() {
        given().get("/9999").then().statusCode(HttpStatus.NO_CONTENT.value());
    }
}
