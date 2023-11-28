
// Created using a tutorial from Redstapler
// GLTF 3D Model from Shaw Pen https://codepen.io/shshaw/pen/yPPOEg

// Three JS needs mainly below three things

/* //////////////////////////////////////// */

// SCENE
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

/* //////////////////////////////////////// */

// CAMERA
var camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 800 );
camera.position.set(100, 100, -5);
camera.lookAt(0, 0, 0); // Look at the center (0, 0, 0)


console.log(window.innerWidth / window.innerHeight, window.innerWidth, window.innerHeight)
/* ////////////////////////////////////////// */

// RENDERER
var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );

// Append canvas to the body
document.body.appendChild( renderer.domElement);

/* ////////////////////////////////////////// */

// Camera Rotation Control
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true


/* /////////////////////////////////////////////// */

// Point Light
// var light = new THREE.PointLight( 0xffffcc, 20, 100 );
// light.position.set( 1, 10, -10 );
// scene.add( light );

var light2 = new THREE.AmbientLight( 0x20202A, 20, 100 );
light2.position.set( 30, -10, 30 );
scene.add( light2 );

/* ////////////////////////////////////////// */

// GLTF Loader to Load and manipulate 3D Models
var loader = new THREE.GLTFLoader();

loader.crossOrigin = true;

loader.load('./test3/ob2/scene.gltf', function (data) {
  var object = data.scene;
  // Center the object by setting its position to (0, 0, 0)
  object.position.set(0, 0, 0);
  object.scale.set(0.8, 0.8, 0.8);
  scene.add(object);
});

/* //////////////////////////////////////// */

// Render animation on every rendering phase
function render () {
  requestAnimationFrame( render ); 
  renderer.render( scene, camera ); // Render Scene and Camera
  controls.update(); // For Orbit Controller
}

render();

/*////////////////////////////////////////*/

// Update Camera Aspect Ratio and Renderer ScreenSize on Window resize
window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );

/*////////////////////////////////////////*/