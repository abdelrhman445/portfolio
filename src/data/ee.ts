import { ex2 } from "./ee-img-2";
import { ex3 } from "./ee-img-3";
import { ex4 } from "./ee-img-4";
import { ex5 } from "./ee-img-5";
import { ex6 } from "./ee-img-6";
import { dol } from "./ee-img-dol";

export type EEProject = {
  index: string;
  title: string;
  tag: string;
  description: string;
  tools: string[];
  href?: string;
  images?: { src: string; alt: string; caption: string }[];
};

const sets: Record<number, Record<string, string>> = { 2: ex2, 3: ex3, 4: ex4, 5: ex5, 6: ex6 };

const img = (n: number, k: string, alt: string, caption: string) => ({
  src: sets[n][k],
  alt,
  caption,
});

export const eeProjects: EEProject[] = [
  {
    index: "01",
    href: "https://drive.google.com/drive/folders/1-4Eq1u3bCn0HIaDGl6SlFWSRyZjBIboM",
    title: "Power Rectifier Simulations",
    tag: "Power Electronics Lab, Zagazig University",
    description:
      "A series of MATLAB/Simulink models from my power electronics lab course, built and analysed one circuit at a time. For each rectifier I ran a resistive load (R = 10 \u03a9) and an inductive load at a low and a high inductance, then compared the output voltage, output current, supply current and diode voltage and current. Adding a freewheeling diode shows clearly how the output current changes between discontinuous and continuous conduction.",
    tools: ["MATLAB", "Simulink", "Power Electronics"],
  },
  {
    index: "02",
    href: "https://drive.google.com/drive/folders/1coLL_eFdym34bmdgj1cWLAvaxxse3tCW",
    title: "Single-Phase Half-Wave Rectifier",
    tag: "Simulation \u2014 Experiment 2",
    description:
      "A half-wave diode rectifier simulated with a resistive load and with RL loads (L = 0.02 H and L = 0.2 H), with and without a freewheeling diode. With the small inductance the current stops flowing before the next cycle starts. With the larger one it keeps flowing. The freewheeling diode lets the load current carry on through the negative half-cycle.",
    tools: ["MATLAB", "Simulink"],
    images: [
      img(2, "circuit", "Simulink model of a single-phase half-wave rectifier", "Simulink model"),
      img(2, "case1", "Half-wave rectifier waveforms with a resistive load", "Resistive load"),
      img(2, "case3", "Half-wave rectifier waveforms with a high-inductance load", "RL load, L = 0.2 H"),
    ],
  },
  {
    index: "03",
    href: "https://drive.google.com/drive/folders/1CUX8xvCnZRQi_2rMZKlO0kKRwoEDwywn",
    title: "Single-Phase Full-Wave Bridge Rectifier",
    tag: "Simulation \u2014 Experiment 3",
    description:
      "A four-diode bridge rectifier tested with R and RL loads (L = 0.02 H and L = 1 H). The small inductor leaves visible ripple in the output current. The large one gives an almost flat current. I also ran longer simulations to confirm the steady state.",
    tools: ["MATLAB", "Simulink"],
    images: [
      img(3, "circuit", "Simulink model of a single-phase bridge rectifier", "Simulink model"),
      img(3, "case1", "Bridge rectifier waveforms with a resistive load", "Resistive load"),
      img(3, "case3", "Bridge rectifier waveforms with a high-inductance load", "RL load, L = 1 H"),
    ],
  },
  {
    index: "04",
    href: "https://drive.google.com/drive/folders/1Xkbcm6ilWoX-V8FHmzTz2qKG8uDtQoDf",
    title: "Full-Wave Rectifier with Center-Tapped Transformer",
    tag: "Simulation \u2014 Experiment 4",
    description:
      "The same set of load cases applied to a two-diode full-wave rectifier fed from a center-tapped transformer. Comparing it with the bridge shows how each diode only carries current for half of the cycle and how the supply current differs between the two layouts.",
    tools: ["MATLAB", "Simulink"],
    images: [
      img(4, "circuit", "Simulink model of a center-tapped full-wave rectifier", "Simulink model"),
      img(4, "case1", "Center-tapped rectifier waveforms with a resistive load", "Resistive load"),
      img(4, "case3", "Center-tapped rectifier waveforms with a high-inductance load", "RL load, high L"),
    ],
  },
  {
    index: "05",
    href: "https://drive.google.com/drive/folders/1o5YB5g_LFrDiYPDuotJA9j8HGOd9C81u",
    title: "Three-Phase Half-Wave Rectifier",
    tag: "Simulation \u2014 Experiment 5",
    description:
      "A three-diode rectifier on a three-phase supply, simulated with R and RL loads. Each diode conducts for one third of the cycle, and the output voltage follows the highest phase at each moment. Raising the inductance smooths the load current.",
    tools: ["MATLAB", "Simulink"],
    images: [
      img(5, "circuit", "Simulink model of a three-phase half-wave rectifier", "Simulink model"),
      img(5, "case1", "Three-phase half-wave rectifier waveforms with a resistive load", "Resistive load"),
      img(5, "case3", "Three-phase half-wave rectifier waveforms with a high-inductance load", "RL load, high L"),
    ],
  },
  {
    index: "06",
    href: "https://drive.google.com/drive/folders/1GKOcGC0fjRtygpyUrvkDH8kytYyJ77Ul",
    title: "Three-Phase Full-Wave Rectifier",
    tag: "Simulation \u2014 Experiment 6",
    description:
      "A six-diode three-phase bridge rectifier tested with the same R and RL cases. The output has much less ripple than the half-wave version, and I compared the diode and supply currents across the load cases.",
    tools: ["MATLAB", "Simulink"],
    images: [
      img(6, "circuit", "Simulink model of a three-phase bridge rectifier", "Simulink model"),
      img(6, "case1", "Three-phase bridge rectifier waveforms with a resistive load", "Resistive load"),
      img(6, "case3", "Three-phase bridge rectifier waveforms with a high-inductance load", "RL load, high L"),
    ],
  },
  {
    index: "07",
    title: "Direct-On-Line Motor Starter",
    tag: "Classic Control \u2014 Design and Simulation",
    description:
      "A design and simulation of the classic Direct-On-Line starter for a three-phase motor. The power circuit feeds the motor through the main contacts of contactor K1. The control circuit uses a normally closed Stop button, a normally open Start button and an auxiliary K1 contact wired in parallel with Start. That auxiliary contact latches the coil once Start is pressed, so the motor keeps running until Stop opens the circuit. The two views show the circuit with the contactor energised and at rest.",
    tools: ["Control Circuits", "Contactors", "Simulation"],
    images: [
      { src: dol.running, alt: "DOL starter simulation with the contactor energised and the motor running", caption: "Contactor energised" },
      { src: dol.idle, alt: "DOL starter simulation at rest", caption: "At rest" },
    ],
  },
  {
    index: "08",
    href: "https://drive.google.com/drive/folders/1T_v_QFEhDk4HPsNnAYIG2jlqZd3qOblr",
    title: "Power Diode, Transistor and SCR Testing",
    tag: "Hands-on Lab \u2014 Experiment 1",
    description:
      "A bench session checking power semiconductors with a multimeter: a dual power diode (BYV541V200), an NPN power transistor (D1887) and an SCR thyristor (BT151). I worked out the expected readings for each junction and checked how the SCR turns on once the gate is triggered.",
    tools: ["Multimeter", "Power Devices"],
  },
];
