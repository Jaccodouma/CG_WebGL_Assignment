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

var stringLights = [
	{pos:[1.463667,1.334372,-1.900873]},
	{pos:[1.462143,1.393427,-1.902423]},
	{pos:[1.460579,1.452481,-1.903972]},
	{pos:[1.459635,1.511452,-1.905529]},
	{pos:[1.466042,1.569490,-1.907167]},
	{pos:[1.473156,1.627414,-1.908813]},
	{pos:[1.488015,1.682710,-1.910505]},
	{pos:[1.507305,1.736153,-1.912215]},
	{pos:[1.536888,1.782988,-1.913909]},
	{pos:[1.575080,1.821107,-1.915509]},
	{pos:[1.621847,1.847139,-1.916931]},
	{pos:[1.674682,1.859711,-1.918103]},
	{pos:[1.730366,1.860310,-1.919019]},
	{pos:[1.786599,1.851405,-1.919708]},
	{pos:[1.842260,1.835922,-1.920226]},
	{pos:[1.896871,1.815124,-1.920600]},
	{pos:[1.950571,1.790976,-1.920876]},
	{pos:[2.003593,1.764355,-1.921072]},
	{pos:[2.056542,1.736413,-1.921207]},
	{pos:[2.110484,1.708715,-1.921293]},
	{pos:[2.166885,1.683610,-1.921335]},
	{pos:[2.227374,1.665455,-1.921329]},
	{pos:[2.291044,1.658955,-1.921274]},
	{pos:[2.354502,1.665480,-1.921168]},
	{pos:[2.414945,1.682764,-1.921007]},
	{pos:[2.472073,1.706810,-1.920781]},
	{pos:[2.526496,1.735152,-1.920478]},
	{pos:[2.578870,1.766325,-1.920077]},
	{pos:[2.629729,1.799416,-1.919552]},
	{pos:[2.679447,1.833877,-1.918863]},
	{pos:[2.728285,1.869351,-1.917941]},
	{pos:[2.776412,1.905609,-1.916671]},
	{pos:[2.823914,1.942496,-1.914819]},
	{pos:[2.870868,1.979826,-1.912012]},
	{pos:[2.917230,2.017387,-1.907459]},
	{pos:[2.962485,2.054609,-1.898855]},
	{pos:[3.002682,2.088051,-1.878475]},
	{pos:[3.023108,2.105926,-1.833460]},
	{pos:[3.024998,2.109433,-1.775363]},
	{pos:[3.021576,2.108962,-1.715757]},
	{pos:[3.016995,2.107656,-1.656028]},
	{pos:[3.012070,2.105960,-1.596383]},
	{pos:[3.006822,2.103534,-1.536986]},
	{pos:[3.001153,2.099435,-1.478266]},
	{pos:[2.995059,2.090869,-1.421959]},
	{pos:[2.989424,2.072394,-1.370014]},
	{pos:[2.985366,2.045615,-1.317547]},
	{pos:[2.982492,2.019602,-1.261825]},
	{pos:[2.980104,2.000288,-1.201755]},
	{pos:[2.977827,1.993413,-1.137582]},
	{pos:[2.975618,2.003649,-1.073184]},
	{pos:[2.973679,2.029641,-1.014534]},
	{pos:[2.972374,2.062270,-0.963003]},
	{pos:[2.972593,2.086455,-0.915050]},
	{pos:[2.974603,2.094772,-0.860816]},
	{pos:[2.977169,2.096905,-0.801895]},
	{pos:[2.979752,2.097666,-0.742158]},
	{pos:[2.982275,2.098120,-0.682252]},
	{pos:[2.984722,2.098487,-0.622332]},
	{pos:[2.987084,2.098548,-0.562609]},
	{pos:[2.989372,2.096929,-0.503879]},
	{pos:[2.991738,2.088769,-0.448898]},
	{pos:[2.994704,2.067836,-0.397784]},
	{pos:[2.998338,2.038880,-0.346627]},
	{pos:[3.002279,2.008646,-0.294636]},
	{pos:[3.006389,1.979701,-0.241266]},
	{pos:[3.010621,1.953506,-0.185965]},
	{pos:[3.014951,1.931627,-0.128215]},
	{pos:[3.019333,1.916118,-0.067782]},
	{pos:[3.023669,1.909501,-0.005065]},
	{pos:[3.027780,1.914274,0.058383]},
	{pos:[3.031429,1.931545,0.119796]},
	{pos:[3.034439,1.959873,0.176500]},
	{pos:[3.036762,1.996037,0.227529]},
	{pos:[3.038416,2.036966,0.273853]},
	{pos:[3.038923,2.080152,0.316724]},
	{pos:[3.014464,2.091572,0.343262]},
	{pos:[2.961913,2.062536,0.345495]},
	{pos:[2.908447,2.034055,0.346659]},
	{pos:[2.853863,2.007426,0.347649]},
	{pos:[2.797935,1.983293,0.348552]},
	{pos:[2.740495,1.962330,0.349403]},
	{pos:[2.681410,1.945612,0.350210]},
	{pos:[2.620879,1.934146,0.350974]},
	{pos:[2.559388,1.928520,0.351693]},
	{pos:[2.497577,1.929535,0.352356]},
	{pos:[2.436201,1.936843,0.352959]},
	{pos:[2.376073,1.950667,0.353491]},
	{pos:[2.317630,1.969757,0.353955]},
	{pos:[2.261099,1.993162,0.354349]},
	{pos:[2.206343,2.019745,0.354675]},
	{pos:[2.153001,2.048316,0.354939]},
	{pos:[2.100670,2.077091,0.355177]},
	{pos:[2.061473,2.092686,0.355496]},
	{pos:[2.052098,2.059354,0.355710]},
	{pos:[2.047582,2.001008,0.355801]},
	{pos:[2.045485,1.941518,0.355790]},
	{pos:[2.044402,1.881777,0.355729]},
	{pos:[2.044077,1.821919,0.355628]},
	{pos:[2.043980,1.762036,0.355514]},
	{pos:[2.044400,1.702106,0.355370]},
	{pos:[2.044847,1.642174,0.355224]},
	{pos:[2.045614,1.582225,0.355058]},
	{pos:[2.046522,1.522270,0.354883]},
	{pos:[2.047431,1.462314,0.354707]},
	{pos:[2.048540,1.402354,0.354518]},
	{pos:[2.049797,1.342390,0.354319]},
	{pos:[2.051053,1.282426,0.354120]},
	{pos:[2.052334,1.221306,0.353917]}
]

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
	},
	{
		file: "stringlights_string",
		position: [0,0,0],
		rotation: [0,0,0]
	},
	{
		file: "stringlights_holders",
		position: [0,0,0],
		rotation: [0,0,0]
	}
]

// Load in models
for (let i=0; i<models.length; i++) {
	let element = models[i];
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
}

// Create string lights 
for (let i=0; i<stringLights.length; i++) {
	if (i%4==0) { // Only add one every four lights 
		let element = stringLights[i];
		let newLight = new THREE.PointLight( 0xedc645, 0.2, 2, 2 );
		newLight.position.x = element.pos[0];
		newLight.position.y = element.pos[1];
		newLight.position.z = element.pos[2];
		scene.add(newLight);
	
		// var pointLightHelper = new THREE.PointLightHelper( newLight, 0.2 );
		// scene.add( pointLightHelper );
	}
}

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
function onMouseClick(event){
	event.preventDefault();

	mouse.x =  (event.clientX / window.innerWidth) * 2 -1;
	mouse.y =  -(event.clientY / window.innerHeight) * 2 +1;

	raycaster.setFromCamera(mouse,camera);
	this.tl =  new TimelineMax();
	var intersects = raycaster.intersectObjects(scene.children, true);
	intersects[0].object.material.color.set(Math.random() * 0xFFFFFF);

	this.tl.to(intersects[0].object.rotation, 1, {x: Math.PI *2});

}

render();
window.addEventListener("click", onMouseClick);

