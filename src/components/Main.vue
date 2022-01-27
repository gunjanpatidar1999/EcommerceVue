<template>
  <section>
    <Slider />
    <section>
      <div class="container">
        <div class="row">
          <Sidebar />

          

           <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Features Items</h2>
              <div class="col-sm-4" v-for="pro of allproData" :key="pro.id">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                       <!-- <router-link :to="`/category/${cat.id}`">{{cat.categoryname}}</router-link> -->

                      <router-link :to="`/productdeatils/${pro.id}`">
                        <img
                          class="card-img-top"
                          :src="server + pro.productimagename"
                          width="250"
                          height="250"
                          alt="card image"
                        />
                      </router-link>
                      <h2>{{pro.price}}</h2>
                      <p>{{pro.productname}}</p>
                      <a @click="addtocart(pro.id,pro.quantity,pro.productname,pro.productimagename,pro.price)" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>Add to cart</a
                      >
                    </div>
                   
                  </div>
                  <div class="choose">
                    <ul class="nav nav-pills nav-justified">
                      <li>
                        <a @click="addtowishlist(pro.id,pro.quantity,pro.productname,pro.productimagename,pro.price)" 
                        ><i class="fa fa-plus-square"></i>Add to Wishlist</a
                      >
                        <!-- <a href="#"
                          ><i class="fa fa-plus-square"></i>Add to wishlist</a
                        > -->
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-plus-square"></i>Add to compare</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Slider from "./includes/Slider.vue";
import Sidebar from "./includes/Sidebar.vue";
import {product} from '../common/Service';
export default {
  name: "Main",
  components: {
    Slider,
    Sidebar,
  },
  data()
  {
    return {
      allproData:undefined,
      param:undefined,
      server: "http://127.0.0.1:8000/uploads/",

    };
  },
  methods:{
       addtocart(id,quantity,productname,productimagename,price)
    {
        // alert(id);
        if(localStorage.getItem('myCart')!=undefined){
              let arr = JSON.parse(localStorage.getItem('myCart'))
              let obj={pid:id,quantity:quantity,productname:productname,price:price,productimagename:productimagename}
              arr.push(obj);
              localStorage.setItem('myCart',JSON.stringify(arr));
              this.$store.dispatch('addToCart',arr)
        }
        else{
            let arr=[]
            let obj = {pid:id,quantity:quantity,productname:productname,price:price,productimagename:productimagename}
            arr.push(obj);
            localStorage.setItem('myCart',JSON.stringify(arr));
            this.$store.dispatch('addToCart',arr)

        }
    },
  
  addtowishlist(id,quantity,productname,productimagename,price)
    {
        // alert(id);
        if(localStorage.getItem('myWishlist')!=undefined){
              let arr = JSON.parse(localStorage.getItem('myWishlist'))
              let obj={pid:id,quantity:quantity,productname:productname,price:price,productimagename:productimagename}
              arr.push(obj);
              localStorage.setItem('myWishlist',JSON.stringify(arr));
              this.$store.dispatch('addToWishlist',arr)
        }
        else{
            let arr=[]
            let obj = {pid:id,quantity:quantity,productname:productname,price:price,productimagename:productimagename}
            arr.push(obj);
            localStorage.setItem('myWishlist',JSON.stringify(arr));
            this.$store.dispatch('addToWishlist',arr)

        }
    }
  },
  mounted()
  {
    product().then((res)=>{
      console.log(res.data);
      this.allproData = res.data;
    })
  }
};
</script>

<style>
</style>