// Create scene
var scene = new THREE.Scene();

// Create camera
var camera = new THREE.PerspectiveCamera(
	75, // fov — Camera frustum vertical field of view.
	window.innerWidth/window.innerHeight, // aspect — Camera frustum aspect ratio.
	0.1, // near — Camera frustum near plane.
	5000); // far — Camera frustum far plane. 

// Create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var objLoader = new THREE.ObjectLoader();

objLoader.load(
	"models/room.json",
	function ( obj ) {
		scene.add( obj );
	}
);

objLoader.load(
	"models/cupboard.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 0.398793; 
	  obj.position.z = 1.69392; 
	  
	  obj.rotation.y = THREE.Math.degToRad(180);
	}
);

objLoader.load(
	"models/tv.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 0.396517; 
	  obj.position.z = 1.618; 
	  obj.position.y = 1;
	  
	  obj.rotation.y = THREE.Math.degToRad(180);
	}
);

objLoader.load(
	"models/desk.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = -0.624001; 
	  obj.position.z = 1.5851; 
	}
);

objLoader.load(
	"models/shelves.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = -1.63318; 
	  obj.position.z = 1.48885; 
	  
	  obj.rotation.y = THREE.Math.degToRad(90);
	}
);

objLoader.load(
	"models/chimney.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = -1.77504; 
	  obj.position.z = 0.492233; 
	  
	  obj.rotation.y = THREE.Math.degToRad(90);
	}
);

objLoader.load(
	"models/bedframe.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = -0.853212; 
	  obj.position.z = -0.890586; 
	}
);

objLoader.load(
	"models/mattress.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = -0.853212; 
	  obj.position.z = -0.890585; 
	  obj.position.y = 0.464277;
	}
);

objLoader.load(
	"models/table.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 0.30847; 
	  obj.position.z = -1.43734; 
	  
	  obj.rotation.y = THREE.Math.degToRad(9.333);
	}
);

// var ambient = new THREE.AmbientLight( 0x404040 );
// scene.add( ambient );

// directional - KEY LIGHT
keyLight = new THREE.DirectionalLight( 0xdddddd, .7 );
keyLight.position.set( -80, 60, 80 );
scene.add( keyLight );

//keyLightHelper = new THREE.DirectionalLightHelper( keyLight, 15 );
//scene.add( keyLightHelper );

// directional - FILL LIGHT
fillLight = new THREE.DirectionalLight( 0xdddddd, .3 );
fillLight.position.set( 80, 40, 40 );
scene.add( fillLight );

//fillLightHelper = new THREE.DirectionalLightHelper( fillLight, 15 );
//scene.add( fillLightHelper );

// directional - RIM LIGHT
rimLight = new THREE.DirectionalLight( 0xdddddd, .6 );
rimLight.position.set( -20, 80, -80 );
scene.add( rimLight );

// move camera from center
camera.position.x = 0;
camera.position.y = 3;
camera.position.z = 10;

// import camera control and rotation library
controls = new THREE.OrbitControls( camera ); 
// controls.autoRotate = true;
// controls.autoRotateSpeed = 2;
// controls.noKeys = true;

var render = function () {
   requestAnimationFrame(render);

   controls.update();
   renderer.render(scene, camera);
};

render();

