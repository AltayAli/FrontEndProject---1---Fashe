

for (let f in product) {
    console.log(f)
    $(`.add-to-cart-${f}`).click((e) => {
        e.preventDefault();
        let query;
        query = JSON.stringify(product[f]);
        if (localStorage[f] == undefined && localStorage[f] == null) {
            localStorage.setItem(f, query);
            swal({
                title: product[f]['name'],
                text: "is added to cart !",
                icon: "success",
                button: "OK",
            });
        } else {
            swal({
                title: "This item already  has been existed",
                icon: "warning",
                button: "OK",
            });
        }





    })
};

