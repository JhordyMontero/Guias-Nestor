<?php
require_once 'DeudaAmortizable.php';

$monto = $_POST['monto'];
$tasa = $_POST['tasa'];
$plazo = $_POST['plazo'];

$deuda = new DeudaAmortizable($monto, $tasa, $plazo);
$tabla = $deuda->generarTablaAmortizacion();
$cuota = $deuda->calcularCuota();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tabla de Amortización</title>
    <style>
        body { font-family: Arial; text-align: center; background-color: #f5f5f5; }
        table { margin: 20px auto; border-collapse: collapse; width: 80%; background-color: white; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
        th { background-color: #007BFF; color: white; }
    </style>
</head>
<body>

<h2>Simulador de Tabla de Amortización</h2>
<p><b>Monto:</b> <?= number_format($monto, 2) ?> |
   <b>Tasa:</b> <?= $tasa ?>% |
   <b>Plazo:</b> <?= $plazo ?> meses</p>

<p>Cuota mensual: <strong><?= round($cuota, 2) ?></strong></p>

<table>
    <tr>
        <th>Mes</th>
        <th>Cuota</th>
        <th>Interés</th>
        <th>Capital</th>
        <th>Saldo</th>
    </tr>
    <?php foreach ($tabla as $fila): ?>
        <tr>
            <td><?= $fila['mes'] ?></td>
            <td><?= number_format($fila['cuota'], 2) ?></td>
            <td><?= number_format($fila['interes'], 2) ?></td>
            <td><?= number_format($fila['capital'], 2) ?></td>
            <td><?= number_format($fila['saldo'], 2) ?></td>
        </tr>
    <?php endforeach; ?>
</table>

<br>
<a href="index.html">← Volver al formulario</a>

</body>
</html>
