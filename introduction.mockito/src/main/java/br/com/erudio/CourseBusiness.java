package br.com.erudio;


import br.com.erudio.service.CourseService;

import java.util.ArrayList;
import java.util.List;

// SUT - System ander test
public class CourseBusiness {

    // CourseService is a dependency
    private CourseService service;

    public CourseBusiness(CourseService service) {
        this.service = service;
    }

    public List<String> retrieveCoursesRelatedToSpring(String student){
        var filteredCourses = new ArrayList<String>();

        if (student.equals("Foo Bar")){
            return filteredCourses;
        }

        var allCourses = service.retrieveCourses(student);

        for (String course : allCourses){
            if (course.contains("Spring")){
                filteredCourses.add(course);
            }
        }

        return filteredCourses;
    }
}
