// javascript
// find the HTML/ DIV/ SPAN/ BUTTON
 const alertButton = document.querySelector('#alert')

// listen to any event on that button/div/span/p

    alertButton.addEventListener('click', function() {
        // do something
        alert('ya done pressed me')
    })

 const loggyButton= document.querySelector('#loggy')

 loggyButton.addEventListener('click', function() {
        // do something
        console.log('loggy stuff')
    })


    // FEATURE : When the user types something in the NEW COMMENT && clicks the submit button
    // add the comment to the page

    // find element - the text field && button
    const input = document.querySelector('#new-comment')

    const submitButton = document.querySelector('.btn')
    console.log(submitButton)

    const commentForm = document.querySelector('#comment-form')

    // LISTEN - for event 'submit'/'click' and
    commentForm.addEventListener('submit', function() {
    // then do something
        console.log('yeet form submited')
    })
