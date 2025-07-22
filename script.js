body {
  font-family: Arial, sans-serif;
  background-color: #fff0f6;
  margin: 0;
  padding: 20px;
  color: #333;
}

h1 {
  text-align: center;
  color: #d63384;
}

#malla-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.anio {
  border: 2px solid #ff69b4;
  border-radius: 12px;
  padding: 10px;
  background-color: #ffe0ef;
}

.periodo {
  margin-top: 10px;
}

.ramo {
  display: inline-block;
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid #ff69b4;
  border-radius: 20px;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.ramo.aprobado {
  background-color: #ffb3d9;
  text-decoration: line-through;
}

