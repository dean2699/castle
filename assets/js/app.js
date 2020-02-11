let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//cube
const width = 5;
const height = 5;
const depth = 5;
const geometryCube = new THREE.BoxBufferGeometry(width, height, depth);
//cube color
let mat1 = new THREE.MeshBasicMaterial({color: "white"});

let mainCube = new THREE.Mesh(geometryCube, mat1);

scene.add(mainCube);

//left or right
camera.position.x = 0;
//near or far
camera.position.z = 40;
//above or below
camera.position.y = 5;
//up and down view
camera.rotation.x = 0;
//leftside and rightside view
camera.rotation.y = 0;
//side ways / tilt head
camera.rotation.z = 0;

let render = function() {
  requestAnimationFrame(render);

  if (mainCube){
    let timer = Date.now() * 0.0005;

    camera.position.x = Math.cos( timer ) * 20;
    camera.position.z = Math.sin( timer ) * 20;

    camera.lookAt(scene.position)
    
}
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    let keyCode = event.which;
    if (keyCode == 32) {
        camera.position.set(0, 40, 5);
      }else if (keyCode == 38){
        camera.position.set(0, 7, 40);
    }else if (keyCode == 40){
      camera.position.set(0, 0, 40);
  }
};
  renderer.render(scene, camera);
};
render();