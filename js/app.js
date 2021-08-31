/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

// Creating hotspot locations

scene.hotspotContainer().createHotspot(document.querySelector("#HS1"), {
  "yaw": 0.6617668915249872,
          "pitch": -0.07429129153246983,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS2"), {
  "yaw": 1.1390983972538393,
          "pitch": -0.08630120274110986,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS3"), {
  "yaw": 1.7412694830483941,
          "pitch": -0.08181177815224494,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS4"), {
  "yaw": 2.2390896609205377,
          "pitch": -0.08049808416730819,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS5"), {
  "yaw": 2.695632406751053,
          "pitch": -0.07254373986801177,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS6"), {
  "yaw": -2.613699615488649,
          "pitch": -0.08241874770081914,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS7"), {
  "yaw": -2.2142757893806113,
          "pitch": -0.09347932498143052,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS8"), {
  "yaw": -1.706061553150569,
          "pitch": -0.09457766561083147,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS9"), {
  "yaw": -1.1054006918265422,
          "pitch": -0.08920949672134526,
});

scene.hotspotContainer().createHotspot(document.querySelector("#HS10"), {
  "yaw": -0.6192701870618151,
          "pitch": -0.08167670004022298,
});

scene.hotspotContainer().createHotspot(document.querySelector("#Feedback"), {
  "yaw": 0.004838094084796296,
          "pitch": 0.11320851564375545,
});

// MODALS

document.querySelector("#HS1").addEventListener("click", function () {
    let modal = document.getElementById("BoardOne");
    modal.style.display = "block";
  });
  
  document.querySelector("#HS2").addEventListener("click", function () {
    let modal = document.getElementById("BoardTwo");
    modal.style.display = "block";
  });
  document.querySelector("#HS3").addEventListener("click", function () {
    let modal = document.getElementById("BoardThree");
    modal.style.display = "block";
  });
  document.querySelector("#HS4").addEventListener("click", function () {
    let modal = document.getElementById("BoardFour");
    modal.style.display = "block";
  });
  document.querySelector("#HS5").addEventListener("click", function () {
    let modal = document.getElementById("BoardFive");
    modal.style.display = "block";
  });
  document.querySelector("#HS6").addEventListener("click", function () {
    let modal = document.getElementById("BoardSix");
    modal.style.display = "block";
  });
  document.querySelector("#HS7").addEventListener("click", function () {
    let modal = document.getElementById("BoardSeven");
    modal.style.display = "block";
  });
  document.querySelector("#HS8").addEventListener("click", function () {
    let modal = document.getElementById("BoardEight");
    modal.style.display = "block";
  });
  
  document.querySelector("#HS9").addEventListener("click", function () {
    let modal = document.getElementById("BoardNine");
    modal.style.display = "block";
  });
  
  document.querySelector("#HS10").addEventListener("click", function () {
    let modal = document.getElementById("BoardTen");
    modal.style.display = "block";
  });
  
  
  
  //CLOSING MODALS
  
  


  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardOne");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardTwo");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardThree");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardFour");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardFive");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardSix");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardSeven");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardEight");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardNine");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });
  
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("BoardTen");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  });

  //CLOSING BUTTONS

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonOne");
    var modal1 = document.getElementById("BoardOne");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonTwo");
    var modal1 = document.getElementById("BoardTwo");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonThree");
    var modal1 = document.getElementById("BoardThree");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonFour");
    var modal1 = document.getElementById("BoardFour");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonFive");
    var modal1 = document.getElementById("BoardFive");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonSix");
    var modal1 = document.getElementById("BoardSix");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonSeven");
    var modal1 = document.getElementById("BoardSeven");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonEight");
    var modal1 = document.getElementById("BoardEight");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonNine");
    var modal1 = document.getElementById("BoardNine");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var modalclosebutton = document.getElementById("modalbuttonTen");
    var modal1 = document.getElementById("BoardTen");
    if (event.target == modalclosebutton) {
      modal1.style.display = "none";
    }
  });