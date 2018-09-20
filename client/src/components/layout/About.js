import React from "react";

const About = () => (
  <div>
    <div className="container container-main">
      <div className="row">
        <div className="col-lg-8">
          <div className="well">
            <h2>About Us</h2>
            <div className="well">
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis,
                  tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum
                        possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
            </div>
            <p>In volutpat eu nisi vel sodales. Etiam sagittis magna id turpis elementum
                consequat. Nam ut aliquam metus, ut dictum quam. Fusce arcu libero, pharetra
                quis nibh a, dictum tempus ipsum. Ut scelerisque ipsum in commodo vulputate.
                Ut sollicitudin dictum iaculis. Integer lacinia dui non porta placerat.
                Duis vehicula vestibulum arcu, eu porta odio. Proin at mauris blandit,
                    vulputate mi ut, maximus diam.</p>
            <p>Mauris iaculis mi ac elit ultricies congue. Sed vitae ante id sem gravida
                sagittis. Morbi ac massa lectus. Vivamus ac ullamcorper enim, vitae tempus
                libero. Vestibulum convallis tortor sit amet leo pulvinar pharetra. Pellentesque
                quam nunc, pulvinar ut gravida eu, sagittis non quam. Suspendisse suscipit
                    ante et sapien hendrerit, vitae congue nisi dapibus.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="well">
            <h4>Blog Search</h4>
            <div className="input-group">
              <input type="text" className="form-control" /> <span className="input-group-btn" >
                <button className="btn btn-secondary" type="button"> <span className="fa fa-search"></span>
                </button>
              </span>
            </div>
          </div>
          <div className="well">
            <h4>Sidebar Widget</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis
                adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur
                    vero.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
