var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//BOX GEOMETRY
const width = 3;
const height = 10;
const depth = 0;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

//BOX LANDING
const width1 = 5;
const height1 = 10;
const depth1 = 0;
const geometry1 = new THREE.BoxBufferGeometry(width1, height1, depth1);

// Circle Geometry
const radius = 1;
const segments = 12;
const geometry2 = new THREE.CircleBufferGeometry(radius, segments);

var texture = new THREE.TextureLoader().load( 'textures/pipeNorth.png' );
var texture1 = new THREE.TextureLoader().load( 'textures/pipeSouth.png' );
var texture2 = new THREE.TextureLoader().load( 'textures/bird.png' );
 
var geom = new THREE.BoxGeometry(2, 2, 0);
var geom1 = new THREE.BoxGeometry(1, 8, 0);
var mat = new THREE.MeshBasicMaterial({color: "red"});
var mat1 = new THREE.MeshBasicMaterial({color: "white"});
var cube = new THREE.Mesh(geometry2, material3);
var cube1 = new THREE.Mesh(geom1, material1);
var cube2 = new THREE.Mesh(geom1, material2);

var material = new THREE.MeshBasicMaterial( { map: texture } );
var material1 = new THREE.MeshBasicMaterial( { map: texture1 } );
var material2 = new THREE.MeshBasicMaterial( { map: texture } );
var material3 = new THREE.MeshBasicMaterial( { map: texture2 } );
var bird=new THREE.Mesh( geometry2, material3 );

scene.add(cube2);
scene.add(cube1);
scene.add(cube);
camera.position.x = 10;
camera.position.y = 0;
camera.position.z = 20;


// movement
var xSpeed = 0.001;
var ySpeed = 0.001;
var render = function() {
  requestAnimationFrame(render);
    cube1.position.x = 10;
    cube1.position.y = 2;
        cube2.position.x = 20;
        cube2.position.y = 5;

        if (bird){
            camera.position.x += 0.01;
        }


  document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 38) {
        setTimeout(function(){ cube.position.y += xSpeed}, 10);
        setTimeout(function(){ cube.position.y += xSpeed}, 10)
        setTimeout(function(){ cube.position.x += xSpeed}, 10)
        setTimeout(function(){ cube.position.y += xSpeed}, 10)
        setTimeout(function(){ cube.position.y += xSpeed}, 10)
        setTimeout(function(){ cube.position.x += xSpeed}, 10)
        setTimeout(function(){ cube.position.y += xSpeed}, 10)
        setTimeout(function(){ cube.position.y += xSpeed}, 10)
        setTimeout(function(){ cube.position.x += xSpeed}, 10)
        setTimeout(function(){ cube.position.y += xSpeed}, 10)
        setTimeout(function(){ cube.position.y += xSpeed}, 10   )
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            setTimeout(function(){ cube.position.y -= xSpeed}, 300);
            
    }if (keyCode == 40) {
        cube.position.y -= ySpeed;
    } else if (keyCode == 37) {
        cube.position.x -= xSpeed;
    } else if (keyCode == 39) { 
        cube.position.x += xSpeed;
    } else if (keyCode == 32) {
        cube.position.set(0, 0, 0);
    }

};
  renderer.render(scene, camera);
};

render();