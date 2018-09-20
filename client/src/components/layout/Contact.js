import React from "react";

const Contact = () => (
  <div>
    <div class="container container-main">
      <div class="row">
        <div class="col-lg-8">
          <div class="card bg-light card-body mb-3">
            <h2>Contact Us</h2>
            <form>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea class="form-control"></textarea>
              </div>
              <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
            <br />
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1463.0125226942992!2d-71.0071694509262!3d42.83008476139521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2fd2c74fb2e89%3A0x4b2b1199a9175d3f!2s89+W+Main+St%2C+Merrimac%2C+MA+01860!5e0!3m2!1sen!2sus!4v1423876507085"
              width="700" height="450" frameborder="0"></iframe>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card bg-light card-body mb-3">
            <h4>Blog Search</h4>
            <div class="input-group">
              <input type="text" class="form-control" /> <span class="input-group-btn">

                <button class="btn btn-secondary" type="button">

                  <span class="fa fa-search"></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default Contact;
