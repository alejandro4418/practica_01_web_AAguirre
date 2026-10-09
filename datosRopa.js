const traerDatos = async () => {
    const url = "https://fakestoreapi.com/products/16";
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);

    
        const id = document.getElementById("usrId")
        const imagen = document.getElementById("imagen")
        const titulo = document.getElementById("titulo")
        const categoria = document.getElementById("categoria")
        const precio = document.getElementById("precio")
        const descripcion = document.getElementById("descripcion")
        const rate = document.getElementById("rate")
        const count = document.getElementById("count")

        id.textContent = `#${result.id}`;
        imagen.src = result.image;
        titulo.textContent = result.title;
        categoria.textContent = result.category;
        precio.textContent = `$${result.price}`;
        descripcion.textContent = result.description;
        rate.textContent = result.rating.rate;
        count.textContent = result.rating.count;

    } catch (error){
        console.error("Error:", error)
    }
}

traerDatos()