export const savePlan = (data) => {
  const existing = JSON.parse(localStorage.getItem("plans") || "[]");

  const newPlan = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    data,
  };

  localStorage.setItem("plans", JSON.stringify([newPlan, ...existing]));
};

export const getPlans = () => {
  return JSON.parse(localStorage.getItem("plans") || "[]");
};
