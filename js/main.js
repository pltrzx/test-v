'use strict'

// FOOTER YEAR

const footerCopyrightYearSpan = document.getElementById('footer-copyright-year')
const currentDate = new Date()
footerCopyrightYearSpan.innerText = currentDate.getFullYear()

// HEADER CONTACTS

const header = document.querySelector('header')
const phoneButton = header.querySelector('.phone')
phoneButton.onclick = showContacts
function showContacts(){
    document.body.append(shadowDiv)
    console.log('show')
}
function hideContacts(){
    shadowDiv.remove()
    console.log('hide')
}
const shadowDiv = document.createElement('div')
shadowDiv.className = 'conacts-shadow'
shadowDiv.onclick = hideContacts

const conactsDiv = document.createElement('div')
conactsDiv.className = 'contacts-div'
shadowDiv.append(conactsDiv)

conactsDiv.innerHTML = `
<a href="tel:+375333652324">+375 (33) 365-23-24</a>
<a href="tel:+375295052047">+375 (29) 505-20-47</a>
<a href="email:plamaravto@gmail.com">plamaravto@gmail.com</a>
`
