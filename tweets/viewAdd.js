export const buildAddsView = (add)=>{
    let addVenta = add.estado ? 'compra' : 'venta'
    const addView = `
    <h2>${add.name}</h2>
    <img src="${add.img}">
    <p>${add.descrip}</p>
    <p>Precio:${add.precio}</p>
    <p>${addVenta}</p>
`
return addView;
}


export const buildAddsListSpinner = () => {
    return `
    <div class="spinner"><div></div><div></div><div></div></div>
    `
  }
  
export const buildEmptyAddList = () => {
    return `
    <h2>No hay adds disponibles.</h2>
    `
  }