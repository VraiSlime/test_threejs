import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1 , 100);

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth , window.innerHeight);
            document.body.appendChild(renderer.domElement);

            //initialisation du cube 
            const geometry = new THREE.BoxGeometry(1,1,1); 
            const material = new THREE.MeshBasicMaterial ({color : 0x00ff00 });
            const cube1 = new THREE.Mesh (geometry, material); 
            scene.add(cube1);
            

            const spheres = [];

            //sphere
            function addSphere(radius, color, positionX, positionY, rotationX, rotationY) {
            const geometrySphere = new THREE.SphereGeometry(3, 32, 16);
            const materialSphere = new THREE.MeshBasicMaterial ({ color: 0xdc7a25 });
            const sphere = new THREE.Mesh(geometrySphere, materialSphere); 
            sphere.position.set(positionX, positionY, 0);
            scene.add(sphere);
            
            spheres.push({
                sphere: sphere, 
                rotationX: rotationX,
                rotationY: rotationY
            });
            } 
            
            addSphere(3, 0x6E6E6E, 8, 3, 0.02, 0.02);   // Sphère 1
            addSphere(2, 0x1234ff, -5, 5, 0.04, 0.04);  // Sphère 2
            addSphere(1, 0x6E6E6E, 10, 9, 0.01, 0.06);  // Sphère 3
            addSphere(1, 0xD5C88B, 12, 12, 0.06, 0.06);  // Sphère 3
            addSphere(1, 0xFF4500, 4, -8, 0.06, 0.06);  // Sphère 3
            addSphere(1, 0xD4B38E , 7, -7, 0.06, 0.06);  // Sphère 3
            addSphere(1, 0xD1C17D, 1, 1, 0.06, 0.06);  // Sphère 3
            addSphere(1, 0x66C2FF, 3, -3, 0.06, 0.06);  // Sphère 3
            camera.position.z = 27;

            //afficher le rendu 
            function animate(){
                requestAnimationFrame( animate );
                
                cube1.rotation.x += 0.02;
                cube1.rotation.y += 0.02;           
                
                // Faire tourner chaque sphère avec sa propre vitesse de rotation
                spheres.forEach(({ sphere, rotationX, rotationY }) => {
                sphere.rotation.x += rotationX;
                sphere.rotation.y += rotationY;
                });
                
                renderer.render(scene, camera );

            }

            animate();