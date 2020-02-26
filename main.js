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
	  obj.position.z = -0.86573; 
	  
	  obj.rotation.y = THREE.Math.degToRad(9.333);
	}
);

objLoader.load(
	"models/bin.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 2.07835; 
	  obj.position.z = 0.113945;

	  obj.rotation.y = THREE.Math.degToRad(204);
	}
);

objLoader.load(
	"models/clock.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 1.7029; 
	  obj.position.z = -1.95009;
	  obj.position.y = 1.69322;

	  obj.rotation.x = THREE.Math.degToRad(90);
	}
);

objLoader.load(
	"models/kitchen_cabinet.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 2.8; 
	  obj.position.z = -1.45;

	  obj.rotation.y = THREE.Math.degToRad(270);
	}
);

objLoader.load(
	"models/fridge.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 2.79242; 
	  obj.position.z = -0.67923;

	  obj.rotation.y = THREE.Math.degToRad(270);
	}
);

objLoader.load(
	"models/cabinets.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 2.88982; 
	  obj.position.z = -1.15619;
	  obj.position.y = 1.53193;

	  obj.rotation.y = THREE.Math.degToRad(270);
	}
);

objLoader.load(
	"models/couch.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 1.37328; 
	  obj.position.z = -1.18505;

	  obj.rotation.y = THREE.Math.degToRad(270);
	}
);

objLoader.load(
	"models/door.json",
	function ( obj ) {
	  scene.add( obj );
	}
);

objLoader.load(
	"models/windows.json",
	function ( obj ) {
	  scene.add( obj );
	}
);

objLoader.load(
	"models/shelves_2.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = -1.79182; 
	  obj.position.z = -0.317944; 
	  
	  obj.rotation.y = THREE.Math.degToRad(90);
	}
);

objLoader.load(
	"models/radiator.json",
	function ( obj ) {
	  scene.add( obj );

	  obj.position.x = 1.81458; 
	  obj.position.z = 0.765988; 
	  
	  obj.rotation.y = THREE.Math.degToRad(270);
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
camera.position.x = 1;
camera.position.y = 1.7;
camera.position.z = 1;

// import camera control and rotation library
controls = new THREE.OrbitControls( camera ); 
controls.target = new THREE.Vector3(0,1,0);

var render = function () {
   requestAnimationFrame(render);

   controls.update();
   renderer.render(scene, camera);
};

render();

