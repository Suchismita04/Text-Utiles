import React from 'react'


export default function TextForm(props) {

    return (

        <form class="form-floating">
            <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
            <label for="floatingInputValue">Input with value</label>
        </form>
    )
}