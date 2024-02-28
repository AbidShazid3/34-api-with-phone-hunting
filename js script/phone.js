const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    // console.log(phones);
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById("show-all-container")
    if(phones.length > 12){
        showAllContainer.classList.remove("hidden");
    }
    else{
        showAllContainer.classList.add("hidden");
    }
    // display only first 12 phones
    phones = phones.slice(0,12);

    phones.forEach(phone => {
        // console.log(phone);
        //step 2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = (`card p-4 bg-base-100 shadow-xl`);
        // step 3 set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
           <h2 class="card-title">${phone.phone_name
           }</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
           <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        `;
        // step 4 append
        phoneContainer.appendChild(phoneCard);
    })
    // hide loading spinner
    toggleLoadingSpiner(false);
}

const handleSearch = () => {
    toggleLoadingSpiner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
    
}

const toggleLoadingSpiner = (isLoading)=>{
    const loadingSpinner = document.getElementById("loading-spiner");
    if(isLoading){
        loadingSpinner.classList.remove("hidden");
    }
    else{
        loadingSpinner.classList.add("hidden");
    }
}
// loadPhone();