import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; 

const Hosting = () => {
  return (
    <div className="container-deploy">
      <section className="deploy-fs">
      <div className="row">
        <div className="col-lg-12">
          <h1>Deployment Guide</h1>

          <div className="animation-container animation-container1">
            <h2>Prepare Your Application</h2>
            <p>
              Ensure your application is ready for production, including
              completing development, testing thoroughly, and optimizing
              performance.
            </p>
          </div>

          <div className="animation-container animation-container2">
            <h2>Choose a Hosting Environment</h2>
            <p>
              Decide where you want to deploy your application, such as
              traditional web hosting services, cloud platforms, or specialized
              platforms.
            </p>
          </div>

          <div className="animation-container animation-container3">
            <h2>Set Up Your Hosting Environment</h2>
            <p>
              Create an account, provision servers, set up databases, configure
              networking, and other infrastructure-related tasks.
            </p>
          </div>

          <div className="animation-container animation-container4">
            <h2>Configure Your Application</h2>
            <p>
              Prepare your application for deployment by configuring
              environment-specific settings.
            </p>
          </div>

          <div className="animation-container animation-container5">
            <h2>Build Your Application</h2>
            <p>
              Compile or package your application into a deployable format, such
              as bundling assets or running build scripts.
            </p>
          </div>

          <div className="animation-container animation-container6">
            <h2>Deploy Your Application</h2>
            <p>
              Upload your application files to your hosting environment using file
              transfer methods or deployment tools.
            </p>
          </div>

          <div className="animation-container animation-container7">
            <h2>Configure DNS Settings</h2>
            <p>
              Update DNS settings to point your domain name to your hosting
              environment.
            </p>
          </div>

          <div className="animation-container animation-container8">
            <h2>Test Your Deployment</h2>
            <p>
              Test your application thoroughly to ensure it's working as expected
              in the production environment.
            </p>
          </div>

          <div className="animation-container animation-container9">
            <h2>Monitor and Maintain</h2>
            <p>
              Set up monitoring tools to track metrics and address any issues that
              arise after deployment.
            </p>
          </div>

          <div className="animation-container animation-container10">
            <h2>Update and Scale</h2>
            <p>
              Continue to deploy updates and improvements as your application
              evolves, and scale your infrastructure as needed.
            </p>
          </div>
        </div>
      </div>
      </section>
      <section className="deploy-ss">
      <h1> FrontEnd Deploy Websites</h1>
        <div className="Front-end">
            <div className='logo-inner-' id="logo-position-1">
                <Link to="https://www.netlify.com/"  className="linkWithoutUnderline"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Netlify</title><path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z" fill="#00C7B7"/></svg>
                <p>Netlify</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-2">
                <Link to="https://vercel.com/"  className="linkWithoutUnderline"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z" fill="gray"/></svg>
                <p>Vercel</p></Link>
              </div>
              <div className='logo-inner-'id="logo-position-3">
                <Link to="https://pages.github.com/"  className="linkWithoutUnderline">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub Pages</title><path d="M14.088 13.126h-.296V9.858h.998c.815 0 1.094.47 1.094.98s-.28.98-1.094.98h-.701v1.308zm0-1.582h.74a.642.642 0 0 0 .733-.705.642.642 0 0 0-.732-.706h-.741zm2.881-.37a1.913 1.913 0 0 0-.653.11v-.262a1.756 1.756 0 0 1 .653-.118c.654 0 .824.297.824.732v1.49h-.17l-.066-.174a1.143 1.143 0 0 1-.657.218.663.663 0 0 1-.763-.702c0-.37.205-.645.776-.68l.575-.035v-.122c0-.318-.113-.457-.519-.457zm-.078.85c-.31.03-.445.192-.445.445 0 .196.048.431.462.431a1.056 1.056 0 0 0 .58-.174v-.758zm1.86.493a.252.252 0 0 0-.083.16c0 .11.053.158.166.17l.74.088c.41.044.598.205.598.584 0 .532-.532.74-1.133.74-.61 0-.976-.178-.976-.657a.609.609 0 0 1 .449-.575v-.005a.321.321 0 0 1-.14-.287.392.392 0 0 1 .166-.297.746.746 0 0 1-.349-.714c0-.449.192-.82.85-.82a1.36 1.36 0 0 1 .349.044h.74v.165l-.365.105a.908.908 0 0 1 .126.505c0 .449-.192.82-.85.82a1.397 1.397 0 0 1-.288-.027zm.127.588c-.288.065-.532.2-.532.48 0 .322.244.413.693.413.435 0 .845-.109.845-.48 0-.221-.105-.309-.37-.34zm.727-1.381c0-.288-.056-.554-.566-.554-.51 0-.567.266-.567.554 0 .288.057.553.567.553.51 0 .566-.266.566-.554zm1.637-.82c.74 0 .828.506.828 1.133v.14h-1.438c.018.379.118.723.61.723a1.665 1.665 0 0 0 .719-.122v.261a1.765 1.765 0 0 1-.719.131c-.736 0-.915-.505-.915-1.133s.179-1.133.915-1.133zm-.61 1.024h1.133c0-.387-.022-.753-.523-.753-.506 0-.597.36-.61.753zm2.601-.052c.619.057.767.266.767.623 0 .336-.213.671-.876.671a2.147 2.147 0 0 1-.649-.109V12.8a1.924 1.924 0 0 0 .654.1c.453 0 .575-.192.575-.397 0-.2-.061-.34-.492-.374-.632-.057-.763-.28-.763-.58 0-.31.2-.645.815-.645a1.627 1.627 0 0 1 .627.11v.26a1.799 1.799 0 0 0-.631-.1c-.432 0-.523.162-.523.376 0 .19.078.29.496.326zm-20.787-.659H1.38a.05.05 0 0 0-.05.05v.522a.05.05 0 0 0 .05.05h.416v.649a1.267 1.267 0 0 1-.351.032c-.305 0-.731-.112-.731-1.048s.443-1.06.86-1.06a1.69 1.69 0 0 1 .614.094.05.05 0 0 0 .06-.05l.12-.504a.047.047 0 0 0-.02-.039 1.715 1.715 0 0 0-.903-.165C.73 9.748 0 10.05 0 11.508s.837 1.675 1.542 1.675a1.736 1.736 0 0 0 .938-.25.043.043 0 0 0 .016-.038v-1.628a.05.05 0 0 0-.05-.05zm5.545-1.294a.05.05 0 0 0-.05-.05H7.34a.05.05 0 0 0-.05.05v1.161h-.936V9.923a.05.05 0 0 0-.05-.05h-.6a.05.05 0 0 0-.05.05v3.145a.05.05 0 0 0 .05.05h.6a.05.05 0 0 0 .05-.05v-1.345h.937l-.002 1.345a.05.05 0 0 0 .05.05h.603a.05.05 0 0 0 .05-.05zm-4.389.412a.388.388 0 1 0-.387.392.39.39 0 0 0 .387-.392zm-.042 2.068v-1.451a.05.05 0 0 0-.05-.05h-.6a.057.057 0 0 0-.051.056v2.08c0 .06.038.079.087.079h.54c.06 0 .074-.03.074-.08zm6.764-1.497h-.597a.05.05 0 0 0-.05.05v1.542a.673.673 0 0 1-.367.11c-.215 0-.272-.097-.272-.307v-1.344a.05.05 0 0 0-.05-.05h-.604a.05.05 0 0 0-.05.05v1.446c0 .626.348.779.828.779a1.398 1.398 0 0 0 .71-.217 1.274 1.274 0 0 0 .022.128.052.052 0 0 0 .044.027l.385-.002a.05.05 0 0 0 .05-.05v-2.112a.05.05 0 0 0-.05-.05zm1.662-.07a1.121 1.121 0 0 0-.569.15V9.923a.05.05 0 0 0-.05-.05h-.602a.05.05 0 0 0-.05.05v3.145a.05.05 0 0 0 .05.05h.418a.05.05 0 0 0 .044-.027.973.973 0 0 0 .025-.144 1.08 1.08 0 0 0 .713.233c.548 0 .862-.278.862-1.248s-.502-1.095-.841-1.095zm-.235 1.771a.716.716 0 0 1-.347-.1v-.996a.793.793 0 0 1 .308-.1c.215-.019.422.046.422.558 0 .54-.094.647-.383.639zm-6.475-1.706h-.45l-.002-.595c0-.023-.011-.034-.037-.034h-.615c-.024 0-.036.01-.036.033v.615l-.33.08a.05.05 0 0 0-.035.048v.387a.05.05 0 0 0 .05.05h.315v.93c0 .692.484.76.812.76a1.375 1.375 0 0 0 .357-.06.046.046 0 0 0 .028-.044l.001-.426a.05.05 0 0 0-.05-.05c-.026 0-.094.01-.163.01-.221 0-.296-.102-.296-.236v-.884h.451a.05.05 0 0 0 .05-.05v-.484a.05.05 0 0 0-.05-.05z"fill="whitesmoke"/></svg>
                <p>GitHub Pages</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-4">
                <Link to="https://firebase.google.com/docs/hosting"  className="linkWithoutUnderline"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firebase</title><path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"fill="#FFCA28"/></svg>
                <p>Firebase Hosting</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-5">
                <Link to="https://aws.amazon.com/s3/"  className="linkWithoutUnderline">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon S3</title><path d="M20.913 13.147l.12-.895c.947.576 1.258.922 1.354 1.071-.16.031-.562.046-1.474-.176zm-2.174 7.988a.547.547 0 0 0-.005.073c0 .084-.207.405-1.124.768a10.28 10.28 0 0 1-1.438.432c-1.405.325-3.128.504-4.853.504-4.612 0-7.412-1.184-7.412-1.704a.547.547 0 0 0-.005-.073L1.81 5.602c.135.078.28.154.432.227.042.02.086.038.128.057.134.062.272.122.417.18l.179.069c.154.058.314.114.478.168.043.013.084.029.13.043.207.065.423.127.646.187l.176.044c.175.044.353.087.534.127a23.414 23.414 0 0 0 .843.17l.121.023c.252.045.508.085.768.122.071.011.144.02.216.03.2.027.4.053.604.077l.24.027c.245.026.49.05.74.07l.081.009c.275.022.552.04.83.056l.233.012c.21.01.422.018.633.025a33.088 33.088 0 0 0 2.795-.026l.232-.011c.278-.016.555-.034.83-.056l.08-.008c.25-.02.497-.045.742-.072l.238-.026c.205-.024.408-.05.609-.077.07-.01.141-.019.211-.03.261-.037.519-.078.772-.122l.111-.02c.215-.04.427-.082.634-.125l.212-.047c.186-.041.368-.085.546-.13l.166-.042c.225-.06.444-.122.654-.189.04-.012.077-.026.115-.038a10.6 10.6 0 0 0 .493-.173c.058-.021.114-.044.17-.066.15-.06.293-.12.43-.185.038-.017.079-.034.116-.052.153-.073.3-.15.436-.228l-.976 7.245c-2.488-.78-5.805-2.292-7.311-3a1.09 1.09 0 0 0-1.088-1.085c-.6 0-1.088.489-1.088 1.088 0 .6.488 1.089 1.088 1.089.196 0 .378-.056.537-.148 1.72.812 5.144 2.367 7.715 3.15zm-7.42-20.047c5.677 0 9.676 1.759 9.75 2.736l-.014.113c-.01.033-.031.067-.048.101-.015.028-.026.057-.047.087-.024.033-.058.068-.09.102-.028.03-.051.06-.084.09-.038.035-.087.07-.133.105-.04.03-.074.06-.119.091-.053.036-.116.071-.177.107-.05.03-.095.06-.15.09-.068.036-.147.073-.222.11-.059.028-.114.057-.177.085-.084.038-.177.074-.268.111-.068.027-.13.054-.203.082-.097.036-.205.072-.31.107-.075.026-.148.053-.228.079-.111.035-.233.069-.35.103-.085.024-.165.05-.253.073-.124.034-.258.065-.389.098-.093.022-.181.046-.278.068-.139.032-.287.061-.433.091-.098.02-.191.041-.293.06-.155.03-.32.057-.482.084-.1.018-.198.036-.302.052-.166.026-.342.048-.515.072-.11.014-.213.03-.325.044-.181.023-.372.041-.56.06-.11.012-.218.025-.332.036-.188.016-.386.029-.58.043-.122.009-.24.02-.364.028-.207.012-.422.02-.635.028-.12.005-.234.012-.354.016a35.605 35.605 0 0 1-2.069 0c-.12-.004-.234-.011-.352-.016-.214-.008-.43-.016-.637-.028-.122-.008-.238-.02-.36-.027-.195-.015-.394-.028-.584-.044-.11-.01-.215-.024-.324-.035-.19-.02-.384-.038-.568-.06l-.315-.044c-.176-.024-.355-.046-.525-.073-.1-.015-.192-.033-.29-.05-.167-.028-.335-.055-.494-.086-.096-.018-.183-.038-.276-.056-.151-.032-.305-.062-.45-.095-.09-.02-.173-.043-.26-.064-.138-.034-.277-.067-.407-.102-.082-.022-.157-.046-.235-.069a11.75 11.75 0 0 1-.368-.108c-.075-.024-.141-.049-.213-.073-.11-.037-.223-.075-.325-.113-.067-.025-.125-.051-.188-.077-.096-.038-.195-.076-.282-.115-.06-.027-.11-.054-.166-.08-.08-.039-.162-.077-.233-.116-.052-.028-.094-.055-.142-.084-.063-.038-.13-.075-.185-.113-.043-.029-.075-.058-.113-.086-.048-.037-.098-.073-.139-.11-.032-.029-.054-.057-.08-.087-.033-.035-.069-.07-.093-.104-.02-.03-.031-.058-.046-.086-.018-.035-.039-.068-.049-.102l-.015-.113c.076-.977 4.074-2.736 9.748-2.736zm12.182 12.124c-.118-.628-.84-1.291-2.31-2.128l.963-7.16a.531.531 0 0 0 .005-.073C22.16 1.581 16.447 0 11.32 0 6.194 0 .482 1.581.482 3.851a.58.58 0 0 0 .005.072L2.819 21.25c.071 2.002 5.236 2.75 8.5 2.75 1.805 0 3.615-.188 5.098-.531.598-.138 1.133-.3 1.592-.48 1.18-.467 1.789-1.053 1.813-1.739l.945-7.018c.557.131 1.016.197 1.389.197.54 0 .902-.137 1.134-.413a.956.956 0 0 0 .21-.804Z" fill="#569A31"/></svg>
                <p>Amazon S3</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-6" >
                <Link to="https://www.heroku.com/"  className="linkWithoutUnderline">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Heroku</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"fill="#430098"/></svg>
                <p>Heroku</p></Link>
              </div>
        </div>
        <h1> BackEnd Deploy Websites</h1>
        <div className="Back-end">
            <div className='logo-inner-' >
                <Link to="https://render.com/"  className="linkWithoutUnderline"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Render</title><path d="M13.586 0v3.172H7.523a4.528 4.528 0 0 0-3.018 1.305 4.498 4.498 0 0 0-1.333 2.99v11.326H0V7.509a7.472 7.472 0 0 1 2.204-5.305A7.471 7.471 0 0 1 4.588.589 7.432 7.432 0 0 1 7.51 0Zm5.207 0v3.158H15.62V0ZM24 0v3.158h-3.172V0Zm0 5.207v3.172h-3.172V5.207Zm0 5.207v3.172h-3.172v-3.172Zm0 5.207v3.172h-3.172V15.62Zm0 5.207V24h-3.172v-3.172Zm-5.207 0V24H15.62v-3.172Zm-5.207 0V24h-3.172v-3.172Zm-5.207 0V24H5.207v-3.172Zm-5.221 0V24H0v-3.172Z" fill="#46E3B7"/></svg>
                <p>Render</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-2">
                <Link to="https://railway.app/"  className="linkWithoutUnderline"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Railway</title><path d="M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z" fill="#fff"/></svg>
                <p>Railway</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-3">
                <Link to="https://pages.github.com/"  className="linkWithoutUnderline">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon AWS</title><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" fill="orange"/></svg>
                <p>Amazon AWS</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-4">
                <Link to="https://firebase.google.com/docs/hosting"  className="linkWithoutUnderline"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firebase</title><path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"fill="#FFCA28"/></svg>
                <p>Firebase Hosting</p></Link>
              </div>
              <div className='logo-inner-' id="logo-position-5">
                <Link to="https://azure.microsoft.com/en-in/"  className="linkWithoutUnderline">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft Azure</title><path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684"fill="#0078D4"/></svg>
                <p>Microsoft Azure</p></Link>
              </div>
              <div className='logo-inner-'id="logo-position-6">
                <Link to="https://www.heroku.com/"  className="linkWithoutUnderline">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Heroku</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"fill="#430098"/></svg>
                <p>Heroku</p></Link>
              </div>

        </div>
        <div className="deploy-reference">


        </div>
       

      </section>
    </div>
  );
};

export default Hosting;
