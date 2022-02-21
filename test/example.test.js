// IMPORT MODULES under test here:
import { renderToDo } from '../render-utils.js';

const test = QUnit.test;

test('a complete todo should render a list with a class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="complete"> Walk dog,</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderToDo({ description: 'Walk dog', complete: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
