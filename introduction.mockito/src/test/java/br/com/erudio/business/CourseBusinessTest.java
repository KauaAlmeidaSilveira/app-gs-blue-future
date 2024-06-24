package br.com.erudio.business;

import br.com.erudio.CourseBusiness;
import br.com.erudio.service.CourseService;
import br.com.erudio.services.stubs.CourseServiceStub;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CourseBusinessTest {

    @Test
    void testCoursesRelatedToSpring_When_UsingAStub() {
        // Given - Arrange
        CourseService stubService = new CourseServiceStub();
        CourseBusiness business = new CourseBusiness(stubService);

        // When - Act
        var filteredCourses = business
                .retrieveCoursesRelatedToSpring("Leandro");

        // Then - Assert
        assertEquals(4, filteredCourses.size());
    }

    @Test
    void testCoursesRelatedToSpring_When_UsingAFooBarStudent() {
        // Given - Arrange
        CourseService stubService = new CourseServiceStub();
        CourseBusiness business = new CourseBusiness(stubService);

        // When - Act
        var filteredCourses = business
                .retrieveCoursesRelatedToSpring("Foo Bar");

        // Then - Assert
        assertEquals(0, filteredCourses.size());
    }

}
