import {useState, UseState}  from 'react'

import { Container, Grid, Typography, TextField, Button } from '@material-ui/core'
import styles from './calculator.module.scss'

function calculator (){

    const [altura,setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState()

    const calculateImc = () => {
        const alturam = altura/100
        setImc ((peso/(alturam * alturam)).toFixed(2))
    }

    const verifyImc = () =>{
        if (imc < 18.5) return "Abaixo do peso"
        if (imc < 24.9) return "Peso Normal"
        if (imc < 29.9) return "Sobrepeso"
        if (imc < 34.9) return "Obesidade Grau 1"
        if (imc < 39.9) return "Obesidade Grau 2"
        return "Obesidade Grau 3"
    }    
    
    return(
        <div className={styles.calculator}>

            <Container maxWidth="xs">
            <Typography variant="h3">Calculadora</Typography>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <TextField label="Altura em centímetros" variant="filled" fullWidth type="number" value={altura} onChange={({target}) => setAltura(target.value)}/>
                </Grid>
                <Grid item>
                    <TextField label="Peso em KG" variant="filled" fullWidth type="number" value={peso} onChange={({target}) => setPeso(target.value)} />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" fullWidth onClick={() => calculateImc()}>Calcular</Button>
                </Grid>
                {
                    imc &&

                    <Grid item>
                        <Typography>O seu IMC é: {imc} KG/M² - Classificação: {verifyImc()}</Typography>
                    </Grid>
                }
            </Grid>
           </Container>
        </div>
    )
}
export default calculator