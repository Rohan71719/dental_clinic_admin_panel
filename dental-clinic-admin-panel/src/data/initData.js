export const initialData = {
  users: [
    {
      id: '1',
      role: 'Admin',
      email: 'admin@entnt.in',
      password: 'admin123'
    },
    {
      id: '2',
      role: 'Patient',
      email: 'john@entnt.in',
      password: 'patient123',
      patientId: 'p1',
      contact: '1234567890'
    }
  ],
  patients: [
    {
      id: 'p1',
      name: 'John Doe',
      dob: '1990-05-10',
      contact: '1234567890',
      healthInfo: 'No allergies'
    }
  ]
};

export const seedLocalStorage = () => {
  if (!localStorage.getItem('users')) {
    Object.keys(initialData).forEach(key => {
      localStorage.setItem(key, JSON.stringify(initialData[key]));
    });

    // ✅ Also store a loggedInUser (Patient)
    const defaultPatientUser = initialData.users.find(u => u.role === 'Patient');
    if (defaultPatientUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(defaultPatientUser));
    }
  }
};

