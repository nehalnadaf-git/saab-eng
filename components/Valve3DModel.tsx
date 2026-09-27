"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * Interactive 3D Precision Engineering Stage for SAAB Engineering
 * Light Theme Edition: Pristine, bright, metallic studio illumination
 * Procedurally models authentic automotive & mechanical components:
 * 1. Precision Automotive Spiral/Bevel Gear (Bright Silver & Radiant Gold TiN)
 * 2. Multi-Stepped CNC Steering Pinion Shaft (Ground Chrome & Electric Blue)
 * 3. Cold-Forged Flanged Transmission Hub (Vibrant Cobalt & Mirror-Turned Silver)
 * 4. Precision Involute Spur Gear (Light Aerospace Silver)
 * 5. Micro-Honed Hydraulic Spool (Mirror Chrome & Soft Titanium)
 */
export default function Valve3DModel({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // ── SCENE & CAMERA ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.6);

    // ── RENDERER (TUNED FOR CRISP, BRIGHT LIGHT THEME) ──
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // ── STUDIO ENVIRONMENT & IBL ILLUMINATION ──
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    scene.environment = envTexture;
    if ("environmentIntensity" in scene) {
      (scene as any).environmentIntensity = 1.05;
    }

    // ── HIGH-DEFINITION FACTORY STUDIO ILLUMINATION (AUTHENTIC STEEL REFLECTIONS) ──
    // Hemisphere light: Pure clean daylight top with soft neutral steel ground bounce
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8291a0, 0.95);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Balanced ambient baseline (clean illumination across all metal facets)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    // Key Light (top right front - creates crisp, brilliant specular highlights along steel cylinders)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    // Left Fill Light (soft pure white fill)
    const fillLight = new THREE.DirectionalLight(0xe8eef4, 1.2);
    fillLight.position.set(-7, 4, 5);
    scene.add(fillLight);

    // Ground Bounce Light (soft fill from below so underside is clear and never black)
    const groundBounce = new THREE.DirectionalLight(0xdce5ee, 0.8);
    groundBounce.position.set(0, -6, 4);
    scene.add(groundBounce);

    // Rim Light (back-top: defines edges and silhouettes)
    const rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
    rimLight.position.set(1, 6, -5);
    scene.add(rimLight);

    // ── AUTHENTIC PRECISION ENGINEERING METALLIC MATERIALS (FACTORY PHOTO REFERENCE) ──
    // 1. Mirror-Ground & Polished Hard Chrome / Bearing Journals (bright specular reflections)
    const polishedSteelMat = new THREE.MeshStandardMaterial({
      color: 0xd8e4f0,
      metalness: 0.96,
      roughness: 0.08,
    });

    // 2. CNC Lathe-Turned & Milled Alloy Steel (main gear blanks, hubs, stepped shafts)
    const turnedSteelMat = new THREE.MeshStandardMaterial({
      color: 0xb8c5d0,
      metalness: 0.90,
      roughness: 0.22,
    });

    // 3. Precision-Cut Gear Tooth Flanks (bright machined tooth faces)
    const gearToothMat = new THREE.MeshStandardMaterial({
      color: 0xcad6e2,
      metalness: 0.92,
      roughness: 0.16,
    });

    // 4. Cold-Forged Satin Steel (splined shafts, drive dogs, forged flanges)
    const forgedSteelMat = new THREE.MeshStandardMaterial({
      color: 0x94a4b4,
      metalness: 0.86,
      roughness: 0.28,
    });

    // 5. Involute Splines & Snap-Ring Retaining Grooves (light gunmetal silver)
    const splineSteelMat = new THREE.MeshStandardMaterial({
      color: 0x8a9ba8,
      metalness: 0.88,
      roughness: 0.25,
    });

    // 6. Deep Internal Machined Bores, Keyways & Thru-Holes (realistic 3D hole depth)
    const boreSteelMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.70,
      roughness: 0.40,
    });

    // ── PROCEDURAL PRODUCT 1: PRECISION AUTOMOTIVE BEVEL GEAR ──
    function createBevelGear(options: {
      opacity?: number;
    } = {}) {
      const group = new THREE.Group();
      const transparent = (options.opacity ?? 1.0) < 1.0;
      const opacity = options.opacity ?? 1.0;

      const bodyMat = transparent
        ? new THREE.MeshStandardMaterial({
            color: 0xb8c5d0,
            metalness: 0.90,
            roughness: 0.22,
            transparent,
            opacity,
          })
        : turnedSteelMat;

      const toothMat = transparent
        ? new THREE.MeshStandardMaterial({
            color: 0xcad6e2,
            metalness: 0.92,
            roughness: 0.16,
            transparent,
            opacity,
          })
        : gearToothMat;

      // 1. Conical Gear Blank Base (Truncated cone - bright silver)
      const coneGeo = new THREE.CylinderGeometry(0.85, 1.45, 0.65, 36);
      const cone = new THREE.Mesh(coneGeo, bodyMat);
      group.add(cone);

      // 2. Rear mounting flange with mirror chamfer
      const rearFlangeGeo = new THREE.CylinderGeometry(1.48, 1.48, 0.22, 36);
      const rearFlange = new THREE.Mesh(rearFlangeGeo, polishedSteelMat);
      rearFlange.position.y = -0.42;
      group.add(rearFlange);

      // Rear turned dish
      const rearDishGeo = new THREE.CylinderGeometry(1.10, 1.10, 0.08, 32);
      const rearDish = new THREE.Mesh(rearDishGeo, forgedSteelMat);
      rearDish.position.y = -0.52;
      group.add(rearDish);

      // 3. Central Hub & Shaft Collar
      const hubGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.85, 32);
      const hub = new THREE.Mesh(hubGeo, bodyMat);
      hub.position.y = 0.45;
      group.add(hub);

      // Hub chamfered rim
      const hubCollarGeo = new THREE.CylinderGeometry(0.60, 0.55, 0.12, 32);
      const hubCollar = new THREE.Mesh(hubCollarGeo, polishedSteelMat);
      hubCollar.position.y = 0.88;
      group.add(hubCollar);

      // 4. Center Axle Bore with Internal Keyway (Clean machined bore)
      const boreGeo = new THREE.CylinderGeometry(0.26, 0.26, 2.1, 24);
      const bore = new THREE.Mesh(boreGeo, boreSteelMat);
      group.add(bore);

      const keywayGeo = new THREE.BoxGeometry(0.10, 2.15, 0.12);
      const keyway = new THREE.Mesh(keywayGeo, boreSteelMat);
      keyway.position.set(0, 0, 0.26);
      group.add(keyway);

      // 5. Bevel Gear Teeth (18 tapered hypoid teeth in bright machined steel)
      const numTeeth = 18;
      const toothGeo = new THREE.BoxGeometry(0.12, 0.58, 0.36);
      toothGeo.translate(0, 0, 0.05);

      const teethGroup = new THREE.Group();
      for (let i = 0; i < numTeeth; i++) {
        const angle = (i / numTeeth) * Math.PI * 2;
        const tooth = new THREE.Mesh(toothGeo, toothMat);
        tooth.position.set(Math.cos(angle) * 1.18, 0.04, Math.sin(angle) * 1.18);
        tooth.rotation.y = -angle + Math.PI / 2;
        tooth.rotation.z = 0.32;
        tooth.rotation.x = 0.08;
        teethGroup.add(tooth);
      }
      group.add(teethGroup);

      return { component: group, spinGroup: teethGroup };
    }

    // ── PROCEDURAL PRODUCT 2: CNC STEERING PINION & SPLINED SHAFT ──
    function createPinionShaft(options: {
      opacity?: number;
    } = {}) {
      const group = new THREE.Group();
      const transparent = (options.opacity ?? 1.0) < 1.0;
      const opacity = options.opacity ?? 1.0;

      const shaftMat = transparent
        ? new THREE.MeshStandardMaterial({
            color: 0xb4c2cd,
            metalness: 0.90,
            roughness: 0.20,
            transparent,
            opacity,
          })
        : turnedSteelMat;

      const teethMat = transparent
        ? new THREE.MeshStandardMaterial({
            color: 0xcad6e2,
            metalness: 0.92,
            roughness: 0.16,
            transparent,
            opacity,
          })
        : gearToothMat;

      // 1. Central Main Shaft Core (Stepped multi-diameter turned steel)
      const mainShaftGeo = new THREE.CylinderGeometry(0.24, 0.24, 4.2, 32);
      const mainShaft = new THREE.Mesh(mainShaftGeo, shaftMat);
      group.add(mainShaft);

      // 2. Upper Ground Bearing Journal (Mirror ground chrome)
      const journal1Geo = new THREE.CylinderGeometry(0.38, 0.38, 0.75, 32);
      const journal1 = new THREE.Mesh(journal1Geo, polishedSteelMat);
      journal1.position.y = 1.35;
      group.add(journal1);

      // Snap-ring Retaining Groove
      const groove1Geo = new THREE.CylinderGeometry(0.30, 0.30, 0.08, 32);
      const groove1 = new THREE.Mesh(groove1Geo, splineSteelMat);
      groove1.position.y = 1.62;
      group.add(groove1);

      // 3. Lower Ground Bearing Seat (Mirror ground chrome)
      const journal2Geo = new THREE.CylinderGeometry(0.36, 0.36, 0.65, 32);
      const journal2 = new THREE.Mesh(journal2Geo, polishedSteelMat);
      journal2.position.y = -1.25;
      group.add(journal2);

      // 4. Center Helical Steering Pinion (Precision ground steel teeth)
      const pinionHubGeo = new THREE.CylinderGeometry(0.48, 0.48, 1.15, 32);
      const pinionHub = new THREE.Mesh(pinionHubGeo, teethMat);
      pinionHub.position.y = 0.10;
      group.add(pinionHub);

      const numPinionTeeth = 8;
      const pToothGeo = new THREE.BoxGeometry(0.12, 1.12, 0.16);
      const pinionTeethGroup = new THREE.Group();
      pinionTeethGroup.position.y = 0.10;

      for (let i = 0; i < numPinionTeeth; i++) {
        const angle = (i / numPinionTeeth) * Math.PI * 2;
        const pTooth = new THREE.Mesh(pToothGeo, teethMat);
        pTooth.position.set(Math.cos(angle) * 0.52, 0, Math.sin(angle) * 0.52);
        pTooth.rotation.y = -angle;
        pTooth.rotation.z = 0.18;
        pinionTeethGroup.add(pTooth);
      }
      group.add(pinionTeethGroup);

      // 5. Involute Splined Drive Section (16 micro splines in cold-forged steel)
      const numSplines = 16;
      const splineGeo = new THREE.BoxGeometry(0.038, 0.85, 0.048);
      const splinesGroup = new THREE.Group();
      splinesGroup.position.y = 1.95;

      for (let i = 0; i < numSplines; i++) {
        const angle = (i / numSplines) * Math.PI * 2;
        const spline = new THREE.Mesh(splineGeo, splineSteelMat);
        spline.position.set(Math.cos(angle) * 0.25, 0, Math.sin(angle) * 0.25);
        spline.rotation.y = -angle;
        splinesGroup.add(spline);
      }
      group.add(splinesGroup);

      // Chamfered Threaded Lead-in Tip
      const tipGeo = new THREE.CylinderGeometry(0.18, 0.24, 0.22, 28);
      const tip = new THREE.Mesh(tipGeo, shaftMat);
      tip.position.y = 2.45;
      group.add(tip);

      // Bottom Drive Dog / Hex Socket
      const socketGeo = new THREE.CylinderGeometry(0.20, 0.20, 0.18, 6);
      const socket = new THREE.Mesh(socketGeo, forgedSteelMat);
      socket.position.y = -2.05;
      group.add(socket);

      return { component: group, spinGroup: group };
    }

    // ── PROCEDURAL PRODUCT 3: COLD-FORGED FLANGED TRANSMISSION HUB ──
    function createTransmissionHub(options: {
      opacity?: number;
    } = {}) {
      const group = new THREE.Group();
      const transparent = (options.opacity ?? 1.0) < 1.0;
      const opacity = options.opacity ?? 1.0;

      const hubMat = transparent
        ? new THREE.MeshStandardMaterial({
            color: 0xb8c5d0,
            metalness: 0.90,
            roughness: 0.22,
            transparent,
            opacity,
          })
        : turnedSteelMat;

      // 1. Large Cold-Forged Perimeter Flange (Bright turned steel)
      const flangeGeo = new THREE.CylinderGeometry(1.65, 1.65, 0.22, 48);
      const flange = new THREE.Mesh(flangeGeo, hubMat);
      group.add(flange);

      // CNC Turned Bright Rim Face (Mirror-bright silver chamfer)
      const rimFaceGeo = new THREE.CylinderGeometry(1.58, 1.58, 0.24, 48);
      const rimFace = new THREE.Mesh(rimFaceGeo, polishedSteelMat);
      group.add(rimFace);

      // 2. Weight-Reduction Thru-Bores (6 counterbored holes with bright chamfers)
      const numBores = 6;
      const boreRadius = 1.15;
      const boreCutoutGeo = new THREE.CylinderGeometry(0.20, 0.20, 0.32, 24);

      for (let i = 0; i < numBores; i++) {
        const angle = (i / numBores) * Math.PI * 2;
        const hole = new THREE.Mesh(boreCutoutGeo, boreSteelMat);
        hole.position.set(Math.cos(angle) * boreRadius, 0, Math.sin(angle) * boreRadius);
        group.add(hole);

        const chamferRingGeo = new THREE.RingGeometry(0.19, 0.24, 24);
        chamferRingGeo.rotateX(-Math.PI / 2);
        const chamferRing = new THREE.Mesh(chamferRingGeo, polishedSteelMat);
        chamferRing.position.set(Math.cos(angle) * boreRadius, 0.125, Math.sin(angle) * boreRadius);
        group.add(chamferRing);
      }

      // 3. Central Raised Splined Neck
      const neckGeo = new THREE.CylinderGeometry(0.68, 0.78, 1.0, 36);
      const neck = new THREE.Mesh(neckGeo, hubMat);
      neck.position.y = 0.50;
      group.add(neck);

      const neckCollarGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.16, 36);
      const neckCollar = new THREE.Mesh(neckCollarGeo, polishedSteelMat);
      neckCollar.position.y = 0.98;
      group.add(neckCollar);

      // 4. External Spline Teeth on Neck
      const numSplines = 18;
      const splineGeo = new THREE.BoxGeometry(0.048, 0.65, 0.055);
      const splineGroup = new THREE.Group();
      splineGroup.position.y = 0.42;

      for (let i = 0; i < numSplines; i++) {
        const angle = (i / numSplines) * Math.PI * 2;
        const spline = new THREE.Mesh(splineGeo, splineSteelMat);
        spline.position.set(Math.cos(angle) * 0.73, 0, Math.sin(angle) * 0.73);
        spline.rotation.y = -angle;
        splineGroup.add(spline);
      }
      group.add(splineGroup);

      // Center Axle Bore (Deep machined bore)
      const centerBoreGeo = new THREE.CylinderGeometry(0.38, 0.38, 2.2, 28);
      const centerBore = new THREE.Mesh(centerBoreGeo, boreSteelMat);
      group.add(centerBore);

      return { component: group, spinGroup: group };
    }

    // ── PROCEDURAL PRODUCT 4: PRECISION INVOLUTE SPUR GEAR ──
    function createSpurGear(options: {
      teethCount?: number;
      radius?: number;
      opacity?: number;
    } = {}) {
      const group = new THREE.Group();
      const transparent = (options.opacity ?? 1.0) < 1.0;
      const opacity = options.opacity ?? 1.0;

      const gearMat = transparent
        ? new THREE.MeshStandardMaterial({
            color: 0xb4c2cd,
            metalness: 0.90,
            roughness: 0.22,
            transparent,
            opacity,
          })
        : turnedSteelMat;

      const r = options.radius ?? 1.25;
      const numTeeth = options.teethCount ?? 22;

      // 1. Outer Gear Rim
      const rimGeo = new THREE.CylinderGeometry(r, r, 0.34, 48);
      const rim = new THREE.Mesh(rimGeo, gearMat);
      group.add(rim);

      // 2. Precision Involute Teeth (Ground steel tooth flanks)
      const toothGeo = new THREE.BoxGeometry(0.14, 0.36, 0.24);
      toothGeo.translate(0, 0, 0.10);

      for (let i = 0; i < numTeeth; i++) {
        const angle = (i / numTeeth) * Math.PI * 2;
        const tooth = new THREE.Mesh(toothGeo, gearToothMat);
        tooth.position.set(Math.cos(angle) * r, 0, Math.sin(angle) * r);
        tooth.rotation.y = -angle;
        group.add(tooth);
      }

      // 3. Recessed Web & 4 Lightening Pockets
      const webGeo = new THREE.CylinderGeometry(r * 0.78, r * 0.78, 0.18, 36);
      const web = new THREE.Mesh(webGeo, forgedSteelMat);
      group.add(web);

      const numPockets = 4;
      for (let i = 0; i < numPockets; i++) {
        const angle = (i / numPockets) * Math.PI * 2;
        const pocketGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.25, 20);
        const pocket = new THREE.Mesh(pocketGeo, boreSteelMat);
        pocket.position.set(Math.cos(angle) * (r * 0.52), 0, Math.sin(angle) * (r * 0.52));
        group.add(pocket);
      }

      // 4. Central Hub with Keyway
      const hubGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.52, 32);
      const hub = new THREE.Mesh(hubGeo, polishedSteelMat);
      group.add(hub);

      const boreGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.65, 24);
      const bore = new THREE.Mesh(boreGeo, boreSteelMat);
      group.add(bore);

      return { component: group, spinGroup: group };
    }

    // ── PROCEDURAL PRODUCT 5: HYDRAULIC SPOOL / STEPPED BEARING SLEEVE ──
    function createHydraulicSpool(options: {
      opacity?: number;
    } = {}) {
      const group = new THREE.Group();
      const transparent = (options.opacity ?? 1.0) < 1.0;
      const opacity = options.opacity ?? 1.0;

      const honedMat = transparent
        ? new THREE.MeshStandardMaterial({
            color: 0xd8e4f0,
            metalness: 0.96,
            roughness: 0.08,
            transparent,
            opacity,
          })
        : polishedSteelMat;

      // 1. Multi-land cylinder body (Mirror-honed chrome)
      const bodyGeo = new THREE.CylinderGeometry(0.55, 0.55, 3.2, 36);
      const body = new THREE.Mesh(bodyGeo, honedMat);
      group.add(body);

      // 2. Metering Grooves (3 recessed distribution annuli)
      [-0.75, 0, 0.75].forEach((yPos) => {
        const grooveGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.32, 32);
        const groove = new THREE.Mesh(grooveGeo, forgedSteelMat);
        groove.position.y = yPos;
        group.add(groove);

        for (let i = 0; i < 4; i++) {
          const angle = (i / 4) * Math.PI * 2;
          const portGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.48, 12);
          portGeo.rotateZ(Math.PI / 2);
          const port = new THREE.Mesh(portGeo, boreSteelMat);
          port.position.set(Math.cos(angle) * 0.22, yPos, Math.sin(angle) * 0.22);
          port.rotation.y = -angle;
          group.add(port);
        }
      });

      // Internal Honed Bore
      const boreGeo = new THREE.CylinderGeometry(0.28, 0.28, 3.4, 28);
      const bore = new THREE.Mesh(boreGeo, boreSteelMat);
      group.add(bore);

      return { component: group, spinGroup: group };
    }

    // ── BUILD SCENE OBJECTS (AUTHENTIC MANUFACTURING SHOWCASE) ──
    const mainGroup = new THREE.Group();

    // 1. BOTTOM-RIGHT HERO FOREGROUND: Precision Automotive Bevel Gear (Turned Steel & Ground Teeth)
    const heroBevelGear = createBevelGear();
    mainGroup.add(heroBevelGear.component);

    // 2. MID-LEFT HERO FOREGROUND: Precision Steering Pinion Shaft (Ground Chrome & Splined Steel)
    const heroPinionShaft = createPinionShaft();
    mainGroup.add(heroPinionShaft.component);

    // 3. TOP-RIGHT HERO CROWN: Cold-Forged Transmission Hub (Turned Flanged Billet & Mirror Rim)
    const heroTransmissionHub = createTransmissionHub();
    mainGroup.add(heroTransmissionHub.component);

    // 4. TOP-LEFT DISTANT DEPTH: Precision Involute Spur Gear (Aerospace Steel)
    const bgSpurGear = createSpurGear({
      teethCount: 20,
      radius: 1.10,
      opacity: 0.80,
    });
    mainGroup.add(bgSpurGear.component);

    // 5. BOTTOM-LEFT DISTANT DEPTH: Hydraulic Spool (Mirror-Honed Hard Chrome)
    const bgHydraulicSpool = createHydraulicSpool({
      opacity: 0.75,
    });
    mainGroup.add(bgHydraulicSpool.component);

    // ── TARGET ORBIT POSITIONS AROUND CENTER CONTENT ──
    const targetOrbit = {
      // 1. Bottom-Right Foreground (Hero Bevel Gear)
      bevelGear: {
        baseX: 5.10,
        baseY: -1.25,
        baseZ: 0.7,
        scale: 0.95,
        rotX: 0.45,
        rotY: -0.60,
        rotZ: 0.20,
        freq: 1.1,
        amp: 0.07,
      },
      // 2. Mid-Left Foreground (Hero Steering Pinion Shaft)
      pinionShaft: {
        baseX: -5.10,
        baseY: -0.20,
        baseZ: 0.5,
        scale: 0.90,
        rotX: 0.35,
        rotY: 0.50,
        rotZ: -0.45,
        freq: 1.2,
        amp: 0.065,
      },
      // 3. Top-Right Floating (Hero Transmission Hub)
      transmissionHub: {
        baseX: 4.90,
        baseY: 2.10,
        baseZ: -0.4,
        scale: 0.75,
        rotX: 0.50,
        rotY: -0.55,
        rotZ: 0.25,
        freq: 1.3,
        amp: 0.065,
      },
      // 4. Top-Left Distant (Depth Layer - Spur Gear)
      bgSpur: {
        baseX: -5.30,
        baseY: 2.50,
        baseZ: -2.2,
        scale: 0.45,
        rotX: 0.40,
        rotY: 0.65,
        rotZ: -0.15,
        freq: 0.9,
        amp: 0.05,
      },
      // 5. Bottom-Left Distant (Depth Layer - Hydraulic Spool)
      bgSpool: {
        baseX: -5.10,
        baseY: -2.50,
        baseZ: -1.8,
        scale: 0.45,
        rotX: 0.60,
        rotY: -0.35,
        rotZ: 0.40,
        freq: 1.0,
        amp: 0.05,
      },
    };

    // Initial Positions for Intro Flight Animation
    heroBevelGear.component.position.set(6.0, -3.0, 2.0);
    heroBevelGear.component.scale.set(0.2, 0.2, 0.2);

    heroPinionShaft.component.position.set(-6.5, 1.5, 1.5);
    heroPinionShaft.component.scale.set(0.2, 0.2, 0.2);

    heroTransmissionHub.component.position.set(5.0, 4.5, 0.5);
    heroTransmissionHub.component.scale.set(0.2, 0.2, 0.2);

    bgSpurGear.component.position.set(-5.0, 4.5, -4.0);
    bgSpurGear.component.scale.set(0.1, 0.1, 0.1);

    bgHydraulicSpool.component.position.set(-3.5, -4.5, -3.5);
    bgHydraulicSpool.component.scale.set(0.1, 0.1, 0.1);

    mainGroup.position.set(0, width < 768 ? -0.45 : -0.30, 0);
    scene.add(mainGroup);
    setLoaded(true);

    // ── MOUSE / TOUCH PARALLAX INTERACTION ──
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
      targetRotY = mouseX * 0.24;
      targetRotX = -mouseY * 0.18;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const { innerWidth, innerHeight } = window;
      mouseX = (e.touches[0].clientX / innerWidth - 0.5) * 2;
      mouseY = (e.touches[0].clientY / innerHeight - 0.5) * 2;
      targetRotY = mouseX * 0.24;
      targetRotX = -mouseY * 0.18;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // ── ANIMATION LOOP WITH HIGH-PRECISION ROTATION & FLOATING PHYSICS ──
    let animationFrameId: number;
    const startTime = performance.now();
    const introDuration = 1.9;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeOutBack = (t: number) => {
      const c1 = 1.2;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      if (elapsedTime < introDuration) {
        // ── INTRO FLIGHT PROGRESS ──
        const rawProgress = Math.min(elapsedTime / introDuration, 1);
        const easeT = easeOutCubic(rawProgress);
        const easeS = easeOutBack(rawProgress);

        // 1. Bevel Gear
        const tb = targetOrbit.bevelGear;
        heroBevelGear.component.position.x = 6.0 + (tb.baseX - 6.0) * easeT;
        heroBevelGear.component.position.y = -3.0 + (tb.baseY - (-3.0)) * easeT;
        heroBevelGear.component.position.z = 2.0 + (tb.baseZ - 2.0) * easeT;
        heroBevelGear.component.rotation.x = tb.rotX * easeT;
        heroBevelGear.component.rotation.y = tb.rotY * easeT;
        heroBevelGear.component.rotation.z = tb.rotZ * easeT;
        const sB = 0.2 + (tb.scale - 0.2) * easeS;
        heroBevelGear.component.scale.set(sB, sB, sB);

        // 2. Steering Pinion Shaft
        const tp = targetOrbit.pinionShaft;
        heroPinionShaft.component.position.x = -6.5 + (tp.baseX - (-6.5)) * easeT;
        heroPinionShaft.component.position.y = 1.5 + (tp.baseY - 1.5) * easeT;
        heroPinionShaft.component.position.z = 1.5 + (tp.baseZ - 1.5) * easeT;
        heroPinionShaft.component.rotation.x = tp.rotX * easeT;
        heroPinionShaft.component.rotation.y = tp.rotY * easeT;
        heroPinionShaft.component.rotation.z = tp.rotZ * easeT;
        const sP = 0.2 + (tp.scale - 0.2) * easeS;
        heroPinionShaft.component.scale.set(sP, sP, sP);

        // 3. Transmission Hub
        const th = targetOrbit.transmissionHub;
        heroTransmissionHub.component.position.x = 5.0 + (th.baseX - 5.0) * easeT;
        heroTransmissionHub.component.position.y = 4.5 + (th.baseY - 4.5) * easeT;
        heroTransmissionHub.component.position.z = 0.5 + (th.baseZ - 0.5) * easeT;
        heroTransmissionHub.component.rotation.x = th.rotX * easeT;
        heroTransmissionHub.component.rotation.y = th.rotY * easeT;
        heroTransmissionHub.component.rotation.z = th.rotZ * easeT;
        const sH = 0.2 + (th.scale - 0.2) * easeS;
        heroTransmissionHub.component.scale.set(sH, sH, sH);

        // 4. Background Spur Gear
        const tbs = targetOrbit.bgSpur;
        bgSpurGear.component.position.x = -5.0 + (tbs.baseX - (-5.0)) * easeT;
        bgSpurGear.component.position.y = 4.5 + (tbs.baseY - 4.5) * easeT;
        bgSpurGear.component.position.z = -4.0 + (tbs.baseZ - (-4.0)) * easeT;
        const sBS = 0.1 + (tbs.scale - 0.1) * easeS;
        bgSpurGear.component.scale.set(sBS, sBS, sBS);

        // 5. Background Spool
        const tbsp = targetOrbit.bgSpool;
        bgHydraulicSpool.component.position.x = -3.5 + (tbsp.baseX - (-3.5)) * easeT;
        bgHydraulicSpool.component.position.y = -4.5 + (tbsp.baseY - (-4.5)) * easeT;
        bgHydraulicSpool.component.position.z = -3.5 + (tbsp.baseZ - (-3.5)) * easeT;
        const sBSP = 0.1 + (tbsp.scale - 0.1) * easeS;
        bgHydraulicSpool.component.scale.set(sBSP, sBSP, sBSP);
      } else {
        // ── CONTINUOUS FLOATING & PRODUCT-SPECIFIC MECHANICAL ROTATION ──
        const idleTime = elapsedTime - introDuration;

        // 1. Bevel Gear: Smooth rotation on its conical hub axis + gentle floating
        const tb = targetOrbit.bevelGear;
        heroBevelGear.component.position.x = tb.baseX + Math.cos(idleTime * tb.freq) * 0.06;
        heroBevelGear.component.position.y = tb.baseY + Math.sin(idleTime * tb.freq) * tb.amp;
        heroBevelGear.component.position.z = tb.baseZ;
        heroBevelGear.component.scale.set(tb.scale, tb.scale, tb.scale);
        heroBevelGear.component.rotation.y = tb.rotY + idleTime * 0.35;

        // 2. Pinion Shaft: Rolling axial spin revealing precision ground journals & splines
        const tp = targetOrbit.pinionShaft;
        heroPinionShaft.component.position.x = tp.baseX + Math.cos(idleTime * tp.freq + 1.0) * 0.05;
        heroPinionShaft.component.position.y = tp.baseY + Math.sin(idleTime * tp.freq + 1.2) * tp.amp;
        heroPinionShaft.component.position.z = tp.baseZ;
        heroPinionShaft.component.scale.set(tp.scale, tp.scale, tp.scale);
        heroPinionShaft.component.rotation.y = tp.rotY + idleTime * 0.28;

        // 3. Transmission Hub: Automotive wheel/rotor spin + gentle floating
        const th = targetOrbit.transmissionHub;
        heroTransmissionHub.component.position.x = th.baseX + Math.cos(idleTime * th.freq + 2.0) * 0.05;
        heroTransmissionHub.component.position.y = th.baseY + Math.sin(idleTime * th.freq + 2.2) * th.amp;
        heroTransmissionHub.component.position.z = th.baseZ;
        heroTransmissionHub.component.scale.set(th.scale, th.scale, th.scale);
        heroTransmissionHub.component.rotation.y = th.rotY + idleTime * 0.22;

        // 4. Background Spur Gear: Slow meshing rotation
        const tbs = targetOrbit.bgSpur;
        bgSpurGear.component.position.x = tbs.baseX + Math.cos(idleTime * tbs.freq + 3.0) * 0.04;
        bgSpurGear.component.position.y = tbs.baseY + Math.sin(idleTime * tbs.freq + 3.0) * tbs.amp;
        bgSpurGear.component.scale.set(tbs.scale, tbs.scale, tbs.scale);
        bgSpurGear.component.rotation.y = tbs.rotY - idleTime * 0.18;

        // 5. Background Hydraulic Spool: Gentle 3D tumbling
        const tbsp = targetOrbit.bgSpool;
        bgHydraulicSpool.component.position.x = tbsp.baseX + Math.cos(idleTime * tbsp.freq + 4.0) * 0.04;
        bgHydraulicSpool.component.position.y = tbsp.baseY + Math.sin(idleTime * tbsp.freq + 4.0) * tbsp.amp;
        bgHydraulicSpool.component.scale.set(tbsp.scale, tbsp.scale, tbsp.scale);
        bgHydraulicSpool.component.rotation.x = tbsp.rotX + idleTime * 0.15;
      }

      // Smooth multi-plane mouse parallax tilt
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // ── RESPONSIVE CALIBRATION ACROSS ALL VIEWPORT SIZES ──
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;

      if (newWidth < 768) {
        // Mobile (320px - 767px) - All 5 precision models visible in balanced orbit frame
        mainGroup.scale.set(1.0, 1.0, 1.0);
        mainGroup.position.set(0, -0.45, 0);
        camera.fov = 48;
        camera.position.set(0, 0, 11.0);

        // 1. Lower-Right Foreground: Bevel Gear
        targetOrbit.bevelGear.baseX = 1.65;
        targetOrbit.bevelGear.baseY = -1.45;
        targetOrbit.bevelGear.baseZ = 0.4;
        targetOrbit.bevelGear.scale = 0.48;

        // 2. Mid-Left Foreground: Steering Pinion Shaft
        targetOrbit.pinionShaft.baseX = -1.75;
        targetOrbit.pinionShaft.baseY = 0.20;
        targetOrbit.pinionShaft.baseZ = 0.3;
        targetOrbit.pinionShaft.scale = 0.46;

        // 3. Upper-Right Floating: Transmission Hub
        targetOrbit.transmissionHub.baseX = 1.50;
        targetOrbit.transmissionHub.baseY = 2.60;
        targetOrbit.transmissionHub.baseZ = -0.3;
        targetOrbit.transmissionHub.scale = 0.44;

        // 4. Upper-Left Floating: Involute Spur Gear (Balances Transmission Hub)
        targetOrbit.bgSpur.baseX = -1.50;
        targetOrbit.bgSpur.baseY = 2.65;
        targetOrbit.bgSpur.baseZ = -0.3;
        targetOrbit.bgSpur.scale = 0.38;

        // 5. Lower-Left Floating: Hydraulic Spool (Balances Bevel Gear)
        targetOrbit.bgSpool.baseX = -1.50;
        targetOrbit.bgSpool.baseY = -1.95;
        targetOrbit.bgSpool.baseZ = -0.3;
        targetOrbit.bgSpool.scale = 0.36;

        bgSpurGear.component.visible = true;
        bgHydraulicSpool.component.visible = true;
      } else if (newWidth < 1200) {
        // Tablet (768px - 1199px)
        mainGroup.scale.set(0.92, 0.92, 0.92);
        mainGroup.position.set(0, -0.35, 0);
        camera.fov = 44;
        camera.position.set(0, 0, 10.2);

        targetOrbit.bevelGear.baseX = 4.20;
        targetOrbit.bevelGear.baseY = -1.30;
        targetOrbit.bevelGear.baseZ = 0.5;
        targetOrbit.bevelGear.scale = 0.80;

        targetOrbit.pinionShaft.baseX = -4.20;
        targetOrbit.pinionShaft.baseY = -0.15;
        targetOrbit.pinionShaft.baseZ = 0.3;
        targetOrbit.pinionShaft.scale = 0.78;

        targetOrbit.transmissionHub.baseX = 4.00;
        targetOrbit.transmissionHub.baseY = 1.85;
        targetOrbit.transmissionHub.baseZ = -0.5;
        targetOrbit.transmissionHub.scale = 0.65;

        targetOrbit.bgSpur.baseX = -4.40;
        targetOrbit.bgSpur.baseY = 2.20;
        targetOrbit.bgSpur.scale = 0.38;

        targetOrbit.bgSpool.baseX = -4.30;
        targetOrbit.bgSpool.baseY = -2.20;
        targetOrbit.bgSpool.scale = 0.38;

        bgSpurGear.component.visible = true;
        bgHydraulicSpool.component.visible = true;
      } else {
        // Desktop (1200px+)
        mainGroup.scale.set(1.0, 1.0, 1.0);
        mainGroup.position.set(0, -0.30, 0);
        camera.fov = 40;
        camera.position.set(0, 0, 9.6);

        targetOrbit.bevelGear.baseX = 5.10;
        targetOrbit.bevelGear.baseY = -1.25;
        targetOrbit.bevelGear.baseZ = 0.7;
        targetOrbit.bevelGear.scale = 0.95;

        targetOrbit.pinionShaft.baseX = -5.10;
        targetOrbit.pinionShaft.baseY = -0.20;
        targetOrbit.pinionShaft.baseZ = 0.5;
        targetOrbit.pinionShaft.scale = 0.90;

        targetOrbit.transmissionHub.baseX = 4.90;
        targetOrbit.transmissionHub.baseY = 2.10;
        targetOrbit.transmissionHub.baseZ = -0.4;
        targetOrbit.transmissionHub.scale = 0.75;

        targetOrbit.bgSpur.baseX = -5.30;
        targetOrbit.bgSpur.baseY = 2.50;
        targetOrbit.bgSpur.scale = 0.45;

        targetOrbit.bgSpool.baseX = -5.10;
        targetOrbit.bgSpool.baseY = -2.50;
        targetOrbit.bgSpool.scale = 0.45;

        bgSpurGear.component.visible = true;
        bgHydraulicSpool.component.visible = true;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // ── CLEANUP & MEMORY MANAGEMENT ──
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });

      pmremGenerator.dispose();
      envTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`valve-3d-orbit-stage ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.7s ease",
        pointerEvents: "none",
      }}
      aria-label="Interactive 3D precision engineering components orbiting the hero section in light theme"
    />
  );
}
