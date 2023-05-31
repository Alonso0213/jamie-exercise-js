let content=[
    { 
        Name:"Golf 8R",
        Price:"R912 800",
        img:"https://i.postimg.cc/cCrjn15s/Volkswagen-Golf-8-R-e1604469763504.jpg",
       
    },
    { 
        Name:"Nissan GT-R R35",
        Price:"R2. 9-million",
        img:"https://i.postimg.cc/cHD2Cth9/GT-R-edit-2-800x480.webp",
       
    },
    { 
        Name:"Lamborghini Revuelto",
        Price:"R9. 8-million",
        img:"https://i.postimg.cc/Zqx1kMdh/2024-lamborghini-revuelto-127-641a1d518802b.jpg",
       
    }
]


const displayElement = document.querySelector('#content');
content.forEach(content => {
   console.log(displayElement); displayElement.innerHTML+=`
<tr>
<td>${content.Name}  </td>
<td> ${content.Price} </td>
<td><img src="${content.img}">  </td>
<td><button>add</button></td>
<td><button>Delete</button></td>
</tr> 
`
});