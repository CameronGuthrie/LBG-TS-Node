import si from "systeminformation";

async function getCPUSpeed() {
    try {
        const cpuSpeed = await si.cpuCurrentSpeed();
        console.log(cpuSpeed);
    } catch (err) {
        console.error(`error fetching cpu speed:`, err);
    }
}

getCPUSpeed();