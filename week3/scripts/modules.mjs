// Import the default export
import byuiCourse from './course.mjs';

// Import the named exports
import { setSectionSelection } from './sections.mjs';
import { setTitle, renderSections } from './output.mjs';

// Event Listeners
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum, true);
    
    // Add the render function back in so the screen updates!
    renderSections(byuiCourse.sections); 
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum, false);
    
    // Add the render function back in so the screen updates!
    renderSections(byuiCourse.sections); 
});

// Initialization
setTitle(byuiCourse);
renderSections(byuiCourse.sections);
setSectionSelection(byuiCourse.sections);