async function run() {
  try {
    const loginRes = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@kybern.local',
        password: 'admin123'
      })
    });
    const loginData = await loginRes.json();
    const token = loginData.data.accessToken;
    
    // Patch task status
    const patchRes = await fetch('http://localhost:3001/api/tasks/6a5490dcb8f8fa6eb5162282/status', {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ status: 'Review' })
    });
    const patchData = await patchRes.json();
    console.log("PATCH STATUS RESPONSE:", JSON.stringify(patchData, null, 2));
    
    // Patch task
    const updateRes = await fetch('http://localhost:3001/api/tasks/6a5490dcb8f8fa6eb5162282', {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ title: 'Updated Title' })
    });
    const updateData = await updateRes.json();
    console.log("PATCH TASK RESPONSE:", JSON.stringify(updateData, null, 2));
    
  } catch (error) {
    console.error(error);
  }
}
run();
