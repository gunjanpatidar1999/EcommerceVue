



<template>
  <section>
    <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description">Product</td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of details" :key="item.pid">
                <td class="cart_product">
                  <router-link to="#"
                    ><img :src="server + item.productimagename" alt="" width="120" height="100"
                  /></router-link>
                </td>
                <td class="cart_description">
                  <h4>
                    <router-link to="#">{{ item.productname }}</router-link>
                  </h4>
                  
                </td>
                <td class="cart_price">
                  <p>Rs. {{ item.price }}</p>
                </td>
                <td class="cart_quantity">
                  <div>
                    <input
                      class="text-center"
                      type="text"
                      name="quantity"
                      :value="item.quantity"
                      autocomplete="off"
                      size="2"
                      readonly
                    />
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">
                    Rs. {{ item.price * item.quantity }}
                  </p>
                </td>
                <td class="cart_delete">
                  <button class="cart_quantity_delete" @click="delItem(item)">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </tr>
             

            </tbody>
          </table>
        </div>
      </div>
    </section>
   
  </section>
</template>

<script>
import store from "../store/store";
import * as type from "../store/types";
export default {
  name: "Wishlist",
  data() {
    return {
      details: undefined,
      quantity: 1,
      server: "http://127.0.0.1:8000/uploads/",
    };
  },
  methods: {

    total() {
      const items = JSON.parse(localStorage.getItem("myCart"));
      var sum = 0;
      items.forEach((item) => {
        sum = sum + item.price * item.quantity;
      });
      return sum;
    },

    delItem(item) {
      let i = this.details.indexOf(item);
      this.details.splice(i, 1);
      let arr = JSON.stringify(this.details);
      localStorage.setItem("myCart", arr);
      let ro = JSON.parse(localStorage.getItem("myCart"))
      this.$store.dispatch("remItem", arr);
      store.dispatch({
              type: type.ROrders,
              id: ro,
            });
    },
  },

  mounted() {
    this.details = JSON.parse(localStorage.getItem("myWishlist"));
    console.log(this.details);
    this.total();
  },
};
</script>

<style>
</style>