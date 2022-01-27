<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          
             
             <Sidebar />

             

          <div class="col-sm-9 padding-right" v-for="pro of proData" :key="pro.id">
            <div class="product-details">
              <!--product-details-->
              <div class="col-sm-5">
                <div class="view-product">
                  <img :src="server + pro.productimagename" />
                 
                </div>
                <div
                  id="similar-product"
                  class="carousel slide"
                  data-ride="carousel"
                >
               

                  
                </div>
              </div>

        <!-- Product description -->
              <div class="col-sm-7">
                <div class="product-information">
                
                  <h2>{{pro.productname}}</h2>
                  <p>Web ID: 1089772</p>
                 
                  <span>
                    <span>₹{{pro.price}}</span>
                    <label>Quantity: </label>
                    <input type="text" :value="pro.quantity"  />
                    <button type="button" class="btn btn-fefault cart">
                      <i class="fa fa-shopping-cart"></i>
                      Add to cart
                    </button>
                  </span>
                  <p><b>Availability:</b> In Stock</p>
                  <p><b>Condition:</b> New</p>
                  <p><b>Brand:</b> E-SHOPPER</p>
                  
                </div>
               
              </div>


            </div>
        
        
           
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { singleproduct } from "../common/Service";
import Sidebar from "../components/includes/Sidebar.vue";
export default {
  name: "ProductDeatils",
  components: {
    Sidebar,
  },
  data() {
    return {
      proData: undefined,
      param: undefined,
      server: "http://127.0.0.1:8000/uploads/",
    };
  },
  mounted() {
    singleproduct(this.param).then((res) => {
      console.log(res.data);
      this.proData = res.data;
    });
  },
  //   watch: {
  //     $route(to) {
  //       this.param = to.params.id;
  //       categoyproduct(this.param).then((res) => {
  //         this.proData = res.data;
  //         console.log(res.data);
  //         // window.location.reload();
  //       });
  //     },
  //   },
  created() {
    this.param = this.$route.params.id;
  },
};
</script>

<style>

</style>