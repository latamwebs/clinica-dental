import React, { useEffect } from "react";
import "../styles/servicios.css"
import endodoncia from "../assets/endodoncia.webp"
import prostodoncia from "../assets/prostodoncia.jpg"
import odontologia from "../assets/odontologia.jpg"
import maxilofacial from "../assets/maxilofacial.webp"
import ortodoncia from "../assets/ortodoncia.webp"
import implantologia from "../assets/implantologia.avif"

export const Servicios = () => {
  
  useEffect(()=>{
    const allLinks = document.querySelectorAll(".tabs a");
    const allTabs = document.querySelectorAll(".tab-content");
    const tabContentWrapper = document.querySelector(".tab-content-wrapper");
    const select = document.querySelector(".tabs-select");

    const shiftTabs = (linkId) => {
      allTabs.forEach((tab, i) => {
        if (tab.id.includes(linkId)) {
          allTabs.forEach((tabItem) => {
            const height = tabContentWrapper.clientHeight;
            tabItem.style = `transform: translateY(-${i * height}px);`;
            select.value = linkId;
          });
        }
      });
    };

    const handleLinkChange = (elem) => {
      const linkId = elem.id;
      const hrefLinkClick = elem.href;

      allLinks.forEach((link, i) => {
        if (link.href == hrefLinkClick) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      shiftTabs(linkId);
    };

    allLinks.forEach((elem) => {
      elem.addEventListener("click", function () {
        handleLinkChange(elem);
      });
    });

    //? handle proper selection for initial load
    const currentHash = window.location.hash;

    let activeLink = document.querySelector(`.tabs a`);

    if (currentHash) {
      const visibleHash = document.getElementById(
        `${currentHash.replace("#", "")}`
      );

      if (visibleHash) {
        activeLink = visibleHash;
      }
    }

    activeLink.classList.toggle("active");

    shiftTabs(activeLink.id);

    const tabsSelect = document.querySelector(".tabs-select");

    tabsSelect.addEventListener("change", function (e) {
      window.location.hash = e.target.value;
      const linkId = e.target.value;
      const elem = document.getElementById(linkId);
      handleLinkChange(elem);
    });
  },[]);
  
  
  return (
    <div className="bg-danube-200 py-24 sm:py-32 bg-lazyload flex-col gap-6" id="servicios">
        <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl pt-5 text-center">
                Explora <span className="text-danube-600">nuestros servicios</span>
            </h2>
        </div>
        <div className="tabs-container">
        <div className="tabs-layout">
            <select className="tabs-select">
                <option value="tab1">Odontología General</option>
                <option value="tab2">Ortodoncia</option>
                <option value="tab3">Cirugía Maxilofacial</option>
                <option value="tab4">Implantología</option>
                <option value="tab5">Prostodoncia</option>
                <option value="tab6">Endodoncia</option>
            </select>
            <ul className="tabs">
                <li>
                <a id="tab1" title="Your Idea & Vision" href="#/tab1">
                <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 512 512" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M447.337,42.461C420.484,15.524,384.903,0.448,347.146,0.01c-26.613-0.311-52.627,6.678-75.331,20.208
                                c-9.756,5.811-21.872,5.811-31.627,0C217.483,6.688,191.45-0.284,164.855,0.009C127.098,0.448,91.516,15.524,64.662,42.46
                                c-26.852,26.935-41.82,62.564-42.145,100.323c-0.273,31.694,9.555,61.843,28.422,87.188
                                c19.022,25.554,32.002,56.391,37.537,89.179c8.402,49.771,20.338,95.454,33.61,128.635C139.371,490.995,158.015,512,179.082,512
                                c7.884,0,15.217-3.192,21.208-9.231c20.36-20.523,28.299-74.563,27.404-186.527c-0.186-23.117,10.126-44.702,28.306-59.269
                                c18.177,14.56,28.491,36.148,28.306,59.269c-0.896,111.963,7.044,166.003,27.404,186.527c5.991,6.039,13.325,9.231,21.208,9.231
                                c21.067,0,39.712-21.005,56.995-64.214c13.272-33.182,25.208-78.865,33.609-128.635c5.535-32.787,18.516-63.625,37.537-89.178
                                c18.867-25.345,28.695-55.495,28.422-87.188C489.157,105.026,474.19,69.397,447.337,42.461z M444.697,217.792
                                c-20.941,28.13-35.218,62.006-41.287,97.962c-19.28,114.218-50.708,175.848-70.492,175.848c-1.654,0-3.914-0.364-6.727-3.199
                                c-22.68-22.863-21.813-131.211-21.487-171.998c0.237-29.521-12.959-57.057-36.192-75.544l-0.344-0.274
                                c-3.582-2.871-7.875-4.306-12.168-4.306s-8.587,1.436-12.171,4.307l-0.332,0.265c-23.242,18.493-36.437,46.031-36.201,75.552
                                c0.325,40.789,1.191,149.136-21.489,171.998c-2.813,2.836-5.072,3.2-6.726,3.2c-19.782,0-51.21-61.63-70.492-175.846
                                c-6.07-35.957-20.346-69.832-41.287-97.963c-16.188-21.748-24.621-47.624-24.387-74.833
                                c0.576-66.8,55.385-121.776,122.175-122.551c22.815-0.261,45.176,5.729,64.654,17.335c16.194,9.648,36.314,9.649,52.51,0
                                c19.476-11.606,41.848-17.615,64.654-17.335c66.793,0.775,121.602,55.752,122.176,122.553
                                C469.319,170.168,460.885,196.045,444.697,217.792z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M131.499,50.63c-2.535-5.032-8.669-7.056-13.698-4.52c-36.36,18.318-59.165,54.833-59.512,95.295
                                c-0.048,5.632,4.478,10.238,10.112,10.286c0.03,0,0.06,0,0.09,0c5.591,0,10.148-4.509,10.196-10.11
                                c0.282-32.786,18.787-62.389,48.292-77.253C132.01,61.793,134.033,55.66,131.499,50.63z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M164.681,34.684c-3.218,0.038-6.47,0.222-9.667,0.548c-5.603,0.571-9.683,5.577-9.112,11.18
                                c0.534,5.253,4.966,9.166,10.134,9.166c0.346,0,0.695-0.017,1.046-0.053c2.59-0.264,5.226-0.413,7.836-0.444
                                c5.633-0.065,10.145-4.686,10.08-10.318C174.933,39.131,170.322,34.632,164.681,34.684z"/>
                        </g>
                    </g>
                </svg>
                        Odontología General
                    </a>
                </li>
                <li>
                    <a id="tab2" title="Product Specification" href="#/tab2">
                    <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M496.714,253.972c-2.303-6.212-4.806-11.841-7.457-16.986c7.269-8.965,11.365-20.225,11.365-32.187v-34.133
                                    c0-28.232-22.968-51.2-51.2-51.2H62.578c-28.232,0-51.2,22.968-51.2,51.2V204.8c0,11.961,4.096,23.222,11.365,32.187
                                    c-2.651,5.145-5.154,10.774-7.457,16.986C1.987,289.852,0,331.237,0,352.711c0,21.958,17.864,39.822,39.822,39.822H153.6
                                    c8.457,0,16.3-2.658,22.756-7.17c6.456,4.512,14.298,7.17,22.756,7.17h113.778c8.457,0,16.3-2.658,22.756-7.17
                                    c6.456,4.512,14.298,7.17,22.756,7.17h113.778c21.958,0,39.822-17.864,39.822-39.822C512,331.237,510.013,289.852,496.714,253.972
                                    z M153.6,358.4H39.822c-3.137,0-5.689-2.552-5.689-5.689c0-6.063,0.234-18.84,1.843-34.133H81.7c8.563,7.538,21.456,7.538,30.02,0
                                    h45.725c1.609,15.293,1.843,28.07,1.843,34.133C159.289,355.848,156.737,358.4,153.6,358.4z M41.71,284.444
                                    c7.776-32.007,23.459-62.578,55.001-62.578c31.544,0,47.226,30.571,55.001,62.578h-39.992c-8.563-7.539-21.456-7.539-30.02,0
                                    H41.71z M312.889,358.4H199.111c-3.137,0-5.689-2.552-5.689-5.689c0-6.063,0.234-18.84,1.843-34.133h45.725
                                    c8.563,7.538,21.456,7.538,30.02,0h45.725c1.609,15.293,1.843,28.07,1.843,34.133C318.578,355.848,316.026,358.4,312.889,358.4z
                                    M200.998,284.444c7.777-32.007,23.459-62.578,55.001-62.578c31.544,0,47.226,30.571,55.001,62.578H271.01
                                    c-8.563-7.539-21.456-7.539-30.02,0H200.998z M256,187.733c-25.202,0-59.122,10.853-79.644,61.656
                                    c-20.522-50.803-54.443-61.656-79.644-61.656c-15.452,0-34.181,4.081-51.091,18.944c-0.068-0.619-0.109-1.245-0.109-1.877v-34.133
                                    c0-9.411,7.656-17.067,17.067-17.067h386.844c9.411,0,17.067,7.656,17.067,17.067V204.8c0,0.633-0.041,1.258-0.109,1.877
                                    c-16.91-14.863-35.639-18.944-51.091-18.944c-25.202,0-59.122,10.853-79.644,61.656C315.122,198.587,281.202,187.733,256,187.733z
                                    M470.289,284.444h-39.991c-8.563-7.539-21.456-7.539-30.02,0h-39.992c7.776-32.007,23.459-62.578,55.001-62.578
                                    C446.831,221.867,462.513,252.438,470.289,284.444z M472.178,358.4H358.4c-3.137,0-5.689-2.552-5.689-5.689
                                    c0-6.063,0.234-18.84,1.843-34.133h45.725c8.563,7.538,21.456,7.538,30.02,0h45.725c1.609,15.293,1.843,28.07,1.843,34.133
                                    C477.867,355.848,475.315,358.4,472.178,358.4z"/>
                            </g>
                        </g>
                    </svg>
                        Ortodoncia
                    </a>
                </li>
                <li>
                    <a id="tab3" title="UX/UI Design" href="#/tab3">
                    <svg fill="#fff" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 511 511" xml:space="preserve">
                        <g>
                            <path d="M508.803,58.765L452.235,2.197c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606l11.667,11.667
                                L396.02,81.746l-22.981-22.981c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606l0.354,0.354L175.758,256.754
                                l-0.002,0.001c0,0-0.001,0.001-0.001,0.001l-83.048,83.048c-4.438,4.438-6.883,10.34-6.883,16.617s2.445,12.179,6.883,16.617
                                l0.814,0.814l-47.507,57.008c-5.166,6.199-4.759,15.176,0.947,20.883l0.845,0.845L2.197,498.197c-2.929,2.929-2.929,7.678,0,10.606
                                C3.661,510.268,5.581,511,7.5,511s3.839-0.732,5.303-2.197l45.608-45.608l0.845,0.845c3.031,3.03,6.984,4.566,10.954,4.566
                                c3.504,0,7.022-1.197,9.929-3.619l57.008-47.507l0.814,0.814c4.438,4.438,10.34,6.883,16.617,6.883s12.179-2.445,16.617-6.883
                                l83.048-83.048c0,0,0.001-0.001,0.002-0.001l0.001-0.001l187.028-187.029l0.354,0.354c1.464,1.464,3.384,2.197,5.303,2.197
                                s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.678,0-10.606l-22.981-22.981l57.276-57.276l11.667,11.667
                                c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197C511.733,66.443,511.733,61.694,508.803,58.765z M385.413,92.353
                                L203.687,274.08l-12.021-12.021L373.393,80.332L385.413,92.353z M214.293,284.686L396.02,102.959l12.021,12.021L226.314,296.707
                                L214.293,284.686z M70.537,453.463c-0.201,0.167-0.491,0.153-0.674-0.03l-12.295-12.295c-0.184-0.185-0.197-0.474-0.031-0.674
                                l46.634-55.96l22.326,22.326L70.537,453.463z M160.589,407.687c-1.605,1.605-3.74,2.49-6.011,2.49s-4.405-0.884-6.01-2.49
                                l-45.255-45.255c-1.605-1.605-2.49-3.739-2.49-6.01s0.884-4.405,2.49-6.011l77.746-77.746l57.276,57.276L160.589,407.687z
                                M430.668,137.607L248.941,319.334l-12.021-12.021l181.727-181.727L430.668,137.607z M418.647,104.374l-12.021-12.021
                                l57.276-57.276l12.021,12.021L418.647,104.374z"/>
                            <path d="M175.756,347.265l-26.481,26.481c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197
                                s3.839-0.732,5.303-2.197l26.481-26.481c2.929-2.929,2.929-7.678,0-10.606C183.434,344.336,178.685,344.336,175.756,347.265z"/>
                            <path d="M199.629,323.393l-3.059,3.059c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197
                                s3.839-0.732,5.303-2.197l3.059-3.059c2.929-2.929,2.929-7.678,0-10.606C207.306,320.464,202.557,320.464,199.629,323.393z"/>
                        </g>
                    </svg>
                        Cirugía Maxilofacial
                    </a>
                </li>
                <li>
                    <a id="tab4" title="Software Development" href="#/tab4">
                    <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M256,0C122.472,0,13.838,108.634,13.838,242.162V449.73c0,34.337,27.934,62.27,62.27,62.27h359.784
                                    c34.336,0,62.27-27.933,62.27-62.27V242.162C498.162,108.634,389.528,0,256,0z M439.201,160.357
                                    c8.509,18.981,14.156,39.514,16.378,61.047h-41.797v0.001c-1.838-14.038-5.513-27.503-10.773-40.152L439.201,160.357z
                                    M373.719,79.782c17.126,12.447,32.213,27.536,44.663,44.662l-36.186,20.892c-8.473-11.016-18.352-20.895-29.368-29.368
                                    L373.719,79.782z M337.802,58.962l-20.895,36.191c-12.649-5.26-26.113-8.936-40.15-10.771l-0.001-41.799
                                    C298.288,44.806,318.821,50.453,337.802,58.962z M235.242,42.583l0.001,41.799c-14.038,1.836-27.504,5.512-40.152,10.773
                                    l-20.897-36.191C193.176,50.454,213.707,44.806,235.242,42.583z M138.28,79.781l20.892,36.186
                                    c-11.016,8.473-20.895,18.352-29.368,29.368l-36.187-20.89C106.067,107.319,121.154,92.231,138.28,79.781z M72.798,160.36
                                    l36.193,20.895c-5.26,12.648-8.936,26.112-10.773,40.15l-41.799,0.001C58.642,199.872,64.289,179.341,72.798,160.36z
                                    M55.351,262.92l41.513-0.001v41.513H55.351V262.92z M55.351,345.946h41.513v20.757c0,11.447-9.311,20.757-20.757,20.757
                                    c-11.445,0-20.757-9.31-20.757-20.757V345.946z M456.649,449.73c0,11.447-9.312,20.757-20.757,20.757H76.108
                                    c-11.445,0-20.757-9.31-20.757-20.757v-24.327c6.497,2.304,13.481,3.57,20.757,3.57c34.336,0,62.27-27.933,62.27-62.27V242.162
                                    c0-64.857,52.765-117.622,117.622-117.622s117.622,52.765,117.622,117.622v124.541c0,34.337,27.934,62.27,62.27,62.27
                                    c7.276,0,14.26-1.266,20.757-3.57V449.73z M456.649,366.703c0,11.447-9.312,20.757-20.757,20.757s-20.757-9.31-20.757-20.757
                                    v-20.757h41.514V366.703z M456.649,304.432h-41.514v-41.513h41.514V304.432z"/>
                            </g>
                        </g>
                    </svg>
                        Implantología
                    </a>
                </li>
                <li>
                    <a id="tab5" title="Architecture & Engineering" href="#/tab5">
                    <svg fill="#fff" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 510.996 510.996" xml:space="preserve">
                        <path d="M501.935,380.954L370.93,279.059c-12.488-9.709-28.076-15.056-43.893-15.056H223.975c-5.421,0-10.762-1.832-15.04-5.158
                            L77.939,156.957c-4.955-3.859-11.117-5.554-17.351-4.773c-2.405,0.301-4.705,0.965-6.849,1.942L46.123,137.9
                            c1.888-1.503,3.56-3.295,4.937-5.361c3.481-5.223,4.72-11.489,3.488-17.643l-8-39.999c-1.233-6.169-4.791-11.485-10.019-14.966
                            c-5.218-3.475-11.484-4.707-17.628-3.47C12.744,57.69,7.435,61.244,3.953,66.468c-3.481,5.223-4.72,11.489-3.488,17.643l8,39.999
                            c2.188,10.95,11.872,18.898,23.026,18.898c0.151,0,0.302-0.008,0.454-0.011l10.432,22.223c-4.757,9.771-2.211,21.898,6.701,28.833
                            l131.005,101.896c12.488,9.708,28.076,15.055,43.893,15.055h0.031v97h-128.5c-12.958,0-23.5,10.542-23.5,23.5v16
                            c0,4.142,3.358,7.5,7.5,7.5h256c4.142,0,7.5-3.358,7.5-7.5v-16c0-12.958-10.542-23.5-23.5-23.5h-0.5v-97h8.031
                            c5.421,0,10.762,1.832,15.04,5.158l130.999,101.89c4.163,3.239,9.149,4.952,14.418,4.952c7.313,0,14.079-3.307,18.561-9.071
                            C514.009,403.705,512.161,388.912,501.935,380.954z M23.173,121.169l-8-40.001c-0.445-2.226,0.002-4.492,1.261-6.38
                            c1.258-1.888,3.178-3.173,5.416-3.62c0.565-0.114,1.134-0.17,1.697-0.17c1.652,0,3.266,0.483,4.668,1.417
                            c1.89,1.259,3.177,3.184,3.625,5.422l8,40.001c0.445,2.226-0.002,4.492-1.261,6.38c-0.96,1.441-2.307,2.527-3.89,3.162
                            c-0.385,0.087-0.766,0.21-1.143,0.362c-0.132,0.033-0.261,0.072-0.395,0.099c-0.544,0.11-1.104,0.167-1.661,0.167
                            C27.463,128.007,23.965,125.132,23.173,121.169z M304.006,408.003h-8.499c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h23.999
                            c4.687,0,8.5,3.813,8.5,8.5v8.5h-241v-8.5c0-4.687,3.813-8.5,8.5-8.5h168c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-24.5v-97
                            h65V408.003z M494.214,404.724c-1.62,2.084-4.069,3.279-6.72,3.279c-1.901,0-3.702-0.619-5.208-1.791l-131-101.891
                            c-6.897-5.364-15.509-8.318-24.249-8.318H223.975c-12.499,0-24.817-4.225-34.685-11.896L58.288,182.213
                            c-3.699-2.878-4.368-8.23-1.491-11.929c1.394-1.792,3.403-2.935,5.657-3.217c0.359-0.045,0.717-0.067,1.073-0.067
                            c1.878,0,3.691,0.62,5.199,1.794l131,101.891c6.897,5.364,15.509,8.318,24.249,8.318h103.063c12.499,0,24.817,4.226,34.685,11.896
                            l131.002,101.894C496.424,395.672,497.092,401.023,494.214,404.724z"/>
                    </svg>
                        Prostodoncia
                    </a>
                </li>
                <li>
                    <a id="tab6" title="MVP Release & Iterations" href="#/tab6">
                    <svg fill="#fff" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16,1h-.93a2.993,2.993,0,0,0-2.5,1.336,1.009,1.009,0,0,0-.116.238.483.483,0,0,1-.916,0,1.009,1.009,0,0,0-.116-.238A2.993,2.993,0,0,0,8.93,1H8A5.006,5.006,0,0,0,3,6V8.409c0,2.417.122,4.862.362,7.263L3.825,20.3A2.99,2.99,0,0,0,6.81,23h.12a2.993,2.993,0,0,0,2.5-1.336L12,17.8l2.574,3.861A2.993,2.993,0,0,0,17.07,23h.12a2.99,2.99,0,0,0,2.985-2.7l.463-4.627c.24-2.4.362-4.846.362-7.263V6A5.006,5.006,0,0,0,16,1Zm3,7.409c0,2.352-.119,4.728-.353,7.064L18.185,20.1a1,1,0,0,1-.995.9h-.12a1,1,0,0,1-.832-.445l-3.406-5.11a1,1,0,0,0-1.664,0l-3.406,5.11A1,1,0,0,1,6.93,21H6.81a1,1,0,0,1-.995-.9l-.462-4.627C5.119,13.137,5,10.761,5,8.409V6A3,3,0,0,1,8,3h.93a1,1,0,0,1,.775.368,2.483,2.483,0,0,0,4.59,0A1,1,0,0,1,15.07,3H16a3,3,0,0,1,3,3ZM15.8,6.493a1,1,0,0,1-.2,1.4A5.919,5.919,0,0,1,12,9,5.5,5.5,0,0,1,8.368,7.774,1,1,0,1,1,9.632,6.226,3.5,3.5,0,0,0,12,7a3.911,3.911,0,0,0,2.4-.7A1,1,0,0,1,15.8,6.493Z"/></svg>
                        Endodoncia
                    </a>
                </li>
            </ul>
            <div className="tab-content-wrapper">
                <section id="tab1-content" className="tab-content">
                    <h2>Servicios</h2>
                        <ul>
                            <li>
                            Resinas (calzas blancas)
                            </li>
                            <li>
                            Blanqueamientos
                            </li>
                            <li>
                            Restauraciones fijas: coronas, puentes, incrustaciones
                            </li>
                            <li>
                            Prótesis dentales: totales y parciales
                            </li>
                            <li>
                            Extracciones
                            </li>
                            <li>
                            Materiales provisionales
                            </li>
                            <li>
                                Entre Otros
                            </li>
                        </ul>
                    <img src={odontologia} className="rounded-lg" alt="odontologia" />
                </section>
                <section id="tab2-content" className="tab-content">
                    <h2>Ortodoncia</h2>
                    <ul>
                        <li>
                        Brackets Metálicos
                        </li>
                        <li>
                        Brackets de Autoligado
                        </li>
                        <li>
                        Brackets Estéticos
                        </li>
                        <li>
                        Alineadores Dentales
                        </li>
                    </ul>
                    <img src={ortodoncia} className="rounded-lg" alt="ortodoncia" />
                </section>
                <section id="tab3-content" className="tab-content">
                    <h2>Cirugía maxilofacial</h2>
                    <ul>
                        <li>
                        Cirugías de cordales
                        </li>
                        <li>
                        Cirugías de implantes
                        </li>
                        <li>
                        Regeneraciones óseas
                        </li>
                        <li>
                        Elevación de seno maxilar
                        </li>
                        <li>
                        Cirugía ortognática
                        </li>
                        <li>
                        Remoción de quistes
                        </li>
                        <li>
                        Problemas de articulación temporomandibular
                        </li>
                    </ul>
                    <img src={maxilofacial} className="rounded-lg" alt="maxilofacial" />

                </section>
                <section id="tab4-content" className="tab-content">
                    <h2>Implantología</h2>
                    <p>
                    Tipos de restauraciones o prótesis sobre implantes:
                    Removibles<br></br>
                    Fijos<br></br>
                    Coronas unitarias<br></br>
                    Puentes fijos sobre implantes<br></br>
                    Prótesis dental all on four
                    </p>
                    <img src={implantologia} className="rounded-lg" alt="implantologia" />
                </section>
                <section id="tab5-content" className="tab-content">
                    <h2>Prostodoncia</h2>
                    <p>
                        Prótesis Dentales: All in Four<br></br>
                        Carillas<br></br>
                        Coronas<br></br>
                        Puentes<br></br>
                        Dientes de porcelana u otros materiales
                    </p>
                    <img src={prostodoncia} className="rounded-lg" alt="prostodoncia" />
                </section>
                <section id="tab6-content" className="tab-content">
                    <h2>Endodoncia</h2>
                    <p>
                    Endodoncia unirradicular<br></br>
                    Endodoncia birradicular<br></br>
                    Endodoncia multirradicular

                    </p>
                    <img src={endodoncia} className="rounded-lg" alt="endodoncia" />
                </section>
            </div>
        </div>
        </div>
    </div>
  );
};
