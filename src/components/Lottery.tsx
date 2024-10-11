import { useState } from 'react';

const max = 100;
const min = 0;

const Lottery = () => {
  const [valuesGenerated, setValuesGenerated] = useState<number[]>([]);
  const [totalOfNumbers, setTotalOfNumbers] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleGenerateValues = () => {
    const count = Math.min(+totalOfNumbers, max - min + 1);
    const uniqueValues = new Set<number>();

    while (uniqueValues.size < count) {
      const numGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueValues.add(numGenerated);
    }

    setValuesGenerated(Array.from(uniqueValues));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Bienvenido a la Casa de Apuestas!</h1>
      <h3 style={styles.subtitle}>¡Todos pueden ganar!</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder='Nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder='Correo Electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder='¿Cuántos números deseas generar?'
          value={totalOfNumbers}
          onChange={(e) => setTotalOfNumbers(e.target.value)}
          style={styles.input}
        />
        <div style={styles.buttonContainer}>
          <button 
            onClick={handleGenerateValues} 
            disabled={totalOfNumbers === "" || name === "" || email === ""}
            style={styles.button}
          >
            Generar números
          </button>
        </div>
      </div>
      <div style={styles.resultContainer}>
        <h4>Números Generados:</h4>
        <p>{valuesGenerated.length > 0 ? valuesGenerated.join(', ') : "¡Genera algunos números!"}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    maxWidth: '400px',
    margin: 'auto',
  },
  title: {
    color: '#007bff',
  },
  subtitle: {
    color: '#28a745',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    fontSize: '16px',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    width: '50%', // Puedes ajustar el tamaño según tu preferencia
  },
  resultContainer: {
    marginTop: '20px',
    textAlign: 'center', // Forzar el tipo correcto
    color: '#6c757d',
  },
};

export default Lottery;
