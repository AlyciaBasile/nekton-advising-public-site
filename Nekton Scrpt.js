{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u55356 \u57263  Dark Mode Toggle\
const themeToggle = document.getElementById('themeToggle');\
\
themeToggle.addEventListener('click', () => \{\
    document.body.classList.toggle('light-mode');\
    themeToggle.textContent = document.body.classList.contains('light-mode') ? "\uc0\u55356 \u57118 " : "\u55356 \u57113 ";\
\});\
\
// \uc0\u55356 \u57263  Smooth Scroll\
document.querySelectorAll('nav a').forEach(anchor => \{\
    anchor.addEventListener('click', function(e) \{\
        e.preventDefault();\
        document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
            behavior: 'smooth'\
        \});\
    \});\
\});\
}