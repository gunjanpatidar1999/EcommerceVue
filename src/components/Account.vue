<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <form>
          <div disabled>
            <div class="form-group">
              <label for="disabledTextInput">First Name</label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                :value="accountdata.firstname"
                disabled
              />
            </div>

            <div class="form-group">
              <label for="disabledTextInput">Last Name</label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                :value="accountdata.lastname"
                disabled
              />
            </div>

            <div class="form-group">
              <label for="disabledTextInput">Email Address</label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                :value="accountdata.email"
                disabled
              />
            </div>
          </div>
        </form>
      </div>

      <!-- change password -->
      <div class="col-sm-6">
        <form @submit.prevent="changepass">
          <div class="form-group">
            <label for="exampleInputPassword1">Old Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="oldpassword"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">New Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="newpassword"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Confirm New Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="cnewpassword"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getToken } from "../common/Jwttoken";
import { changepassword } from "../common/Service";
export default {
  name: "Account",
  data() {
    return {
      accountdata: [],
      oldpassword: undefined,
      newpassword: undefined,
      cnewpassword: undefined,
    };
  },
  methods: {
    changepass() {

      let formdata = {
        old: this.oldpassword,
        new: this.newpassword,
        cnew: this.cnewpassword,
      };

    
      changepassword(formdata).then((res) => {
        if (res) {
          console.log(res.data);
          alert(res.data);
        } else {
          alert("not allowed");
        }

      });

    },
  },
  mounted() {
    const token = getToken();
    const url = "http://127.0.0.1:8000/api/profile/";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = token;
    axios.post(url, data, config).then((res) => {
      console.log(res.data);
      this.accountdata = res.data;
      console.log(this.accountdata);
    });
  },
};
</script>

<style>
</style>