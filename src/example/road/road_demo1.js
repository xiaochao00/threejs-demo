var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BufferGeometry();
var p0 = new THREE.Vector3(0, 0, 0);
var p1 = new THREE.Vector3(52.59326392994262, 21.179612969979644, 8.51);
var p2 = new THREE.Vector3(43.00466185994446, 28.03906742017716, 8.51);
var p3 = new THREE.Vector3(33.41869202000089, 34.896638840436935, 8.51);
var p4 = new THREE.Vector3(30.012989460024983, 31.137017270550132, 8.54);
var p5 = new THREE.Vector3(26.05677608004771, 28.736071820370853, 8.59);
var p6 = new THREE.Vector3(21.55938256997615, 27.69380118045956, 8.65);
var p7 = new THREE.Vector3(16.511478240136057, 28.103264620527625, 8.67);
var p8 = new THREE.Vector3(14.255054940003902, 17.326602770015597, 8.67);

var p9 = new THREE.Vector3(11.566211519995704, 4.484705470502377, 8.67);
var p10 = new THREE.Vector3(17.65915334993042, 3.647169300355017, 8.67);
var p11 = new THREE.Vector3(23.556150650139898, 3.7216169498860836, 8.65);
var p12 = new THREE.Vector3(29.229211339959875, 4.652212710119784, 8.62);
var p13 = new THREE.Vector3(34.613020580029115, 6.420344980433583, 8.59);
var p14 = new THREE.Vector3(39.68891699006781, 9.007402430288494, 8.56);

var p15 = new THREE.Vector3(44.40091640991159, 12.33893817011267, 8.54);
var p16 = new THREE.Vector3(48.721026780083776, 16.414953240193427, 8.52);
var p17 = new THREE.Vector3(52.59326392994262, 21.179612969979644, 8.51);

var pointsArray = new Array();

pointsArray.push(p1);
pointsArray.push(p2);
pointsArray.push(p3);
pointsArray.push(p4);
pointsArray.push(p5);
pointsArray.push(p6);
pointsArray.push(p7);
pointsArray.push(p8);
pointsArray.push(p9);
pointsArray.push(p10);
pointsArray.push(p11);
pointsArray.push(p12);
pointsArray.push(p13);
pointsArray.push(p14);
pointsArray.push(p15);
pointsArray.push(p16);
pointsArray.push(p17);

// geometry.vertices.push(p0);
// pointsArray.push(new THREE.Vector3( -10, 0, 0) );
// pointsArray.push(new THREE.Vector3( 0, 10, 0) );
// pointsArray.push(new THREE.Vector3( 10, 0, 0) );
geometry.setFromPoints(pointsArray);

var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var line = new THREE.Line(geometry, material);

scene.add(line);

renderer.render(scene, camera);