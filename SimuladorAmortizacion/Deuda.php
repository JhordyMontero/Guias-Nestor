<?php
class Deuda {
    protected $monto;
    protected $tasainteres;
    protected $plazo;

    public function __construct($monto, $tasainteres, $plazo) {
        $this->monto = $monto;
        $this->tasainteres = $tasainteres;
        $this->plazo = $plazo;
    }

    public function calcularCuota() {
    }
}
?>
