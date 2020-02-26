//Create Raycaster and mouse
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

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

var models = [
	{
		file: "room",
		position: [0,0,0],
		rotation: [0,0,0]
	},
	{
		file: "cupboard",
		position: [0.398793,1.69392,0],
		rotation: [0,0,180]
	},
	{
		file: "tv",
		position: [0.396517,1.618,1],
		rotation: [0,0,180]
	},
	{
		file: "desk",
		position: [-0.624001,1.5851,0],
		rotation: [0,0,0]
	},
	{
		file: "shelves",
		position: [-1.63318,1.48885,0],
		rotation: [0,0,90]
	},
	{
		file: "chimney",
		position: [-1.77504,0.492233,0],
		rotation: [0,0,90]
	},
	{
		file: "bedframe",
		position: [-0.853212,-0.890585,0],
		rotation: [0,0,0]
	},
	{
		file: "mattress",
		position: [-0.853212,-0.890585,0.464277],
		rotation: [0,0,0]
	},
	{
		file: "table",
		position: [0.30847,-0.86573,0],
		rotation: [0,0,9.333]
	},
	{
		file: "bin",
		position: [2.07835,0.113945,0],
		rotation: [0,0,204]
	},
	{
		file: "clock",
		position: [1.7029,-1.95009,1.69322],
		rotation: [90,0,0]
	},
	{
		file: "kitchen_cabinet",
		position: [2.8,-1.45,0],
		rotation: [0,0,270]
	},
	{
		file: "fridge",
		position: [2.79242,-0.67923,0],
		rotation: [0,0,270]
	},
	{
		file: "cabinets",
		position: [2.88982,-1.15619,1.53193],
		rotation: [0,0,270]
	},
	{
		file: "couch",
		position: [1.37328,-1.18505,0],
		rotation: [0,0,270]
	},
	{
		file: "door",
		position: [0,0,0],
		rotation: [0,0,0]
	},
	{
		file: "windows",
		position: [0,0,0],
		rotation: [0,0,0]
	},
	{
		file: "shelves_2",
		position: [-1.79182,-0.317944,0],
		rotation: [0,0,90]
	},
	{
		file: "radiator",
		position: [1.81458,0.765988,0],
		rotation: [0,0,270]
	}
]

// Load in models
models.forEach(element => {
	objLoader.load(
		"models/" + element.file + ".json",
		function ( obj ) {
			scene.add( obj );

			obj.position.x = element.position[0];
			obj.position.z = element.position[1];
			obj.position.y = element.position[2];
			obj.rotation.x = THREE.Math.degToRad(element.rotation[0]);
			obj.rotation.z = THREE.Math.degToRad(element.rotation[1]);
			obj.rotation.y = THREE.Math.degToRad(element.rotation[2]);
		}
	);
});

// SKYBOX
var directions  = ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"];
var skybox = "Sorsele3";
var materialArray = [];
for (var i = 0; i < 6; i++)
{
   materialArray.push(
      new THREE.MeshBasicMaterial({
         map: THREE.ImageUtils.loadTexture( "skybox/" + skybox + "/" + directions[i]),
         side: THREE.BackSide})
   );
}
	
var skyGeometry = new THREE.CubeGeometry( 500, 500, 500 );	
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
scene.add( skyBox );

// Ambient light
var ambient = new THREE.AmbientLight( 0x302a1c );
scene.add( ambient );

// Main light 
var mainLight = new THREE.PointLight( 0xebcb86, 0.5, 15, 2);

mainLight.position.x = 0.474563;
mainLight.position.y = 2.20716;

scene.add ( mainLight );

mainLightHelper = new THREE.PointLightHelper( mainLight, 15);
scene.add( mainLightHelper );

// directional - KEY LIGHT
// keyLight = new THREE.DirectionalLight( 0xdddddd, .7 );
// keyLight.position.set( -80, 60, 80 );
// scene.add( keyLight );

// keyLightHelper = new THREE.DirectionalLightHelper( keyLight, 15 );
// scene.add( keyLightHelper );

// // directional - FILL LIGHT
// fillLight = new THREE.DirectionalLight( 0xdddddd, .3 );
// fillLight.position.set( 80, 40, 40 );
// scene.add( fillLight );

// fillLightHelper = new THREE.DirectionalLightHelper( fillLight, 15 );
// scene.add( fillLightHelper );

// // directional - RIM LIGHT
// rimLight = new THREE.DirectionalLight( 0xdddddd, .6 );
// rimLight.position.set( -20, 80, -80 );
// scene.add( rimLight );

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


//Interacting with models through raycaster
//TODO somehow only animates ones
function onMouseClick(event){
	event.preventDefault();

	mouse.x =  (event.clientX / window.innerWidth) * 2 -1;
	mouse.y =  -(event.clientY / window.innerHeight) * 2 +1;

	raycaster.setFromCamera(mouse,camera);
	this.tl =  new TimelineMax({
		//Perhaps future properties
	});
	var intersects = raycaster.intersectObjects(scene.children, true);
	if(intersects[0].object.id == 20)
	{
		console.log("even het matras flippen hoor");
		this.tl.to(intersects[0].object.rotation, 1, {x: Math.PI *1});
	}else if(intersects[0].object.id == 31)
	{
		console.log("even het bed flippen hoor");
		this.tl.to(intersects[0].object.rotation, 1, {y: Math.PI *2});
	} else 
	{
		console.log(intersects[0].object.name + "-" + intersects[0].object.id + " is nog niet afgevangen als animatie");
	}

}

render();
window.addEventListener("click", onMouseClick);

