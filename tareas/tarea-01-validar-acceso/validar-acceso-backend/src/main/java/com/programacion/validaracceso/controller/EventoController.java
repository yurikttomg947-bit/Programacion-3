package com.programacion.validaracceso.controller;

import com.programacion.validaracceso.model.SolicitudAcceso;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/evento")
@CrossOrigin(origins = "http://localhost:4200")
public class EventoController {

    @PostMapping("/validarAcceso")
    public Map<String, Object> validarAcceso(@RequestBody SolicitudAcceso solicitud) {
        Map<String, Object> respuesta = new HashMap<>();
        Integer edad = solicitud.getEdad();

        respuesta.put("edad", edad);
        respuesta.put("pago", solicitud.isPago());

        if (edad == null || edad < 0) {
            respuesta.put("permitido", false);
            respuesta.put("mensaje", "Edad no valida");
            return respuesta;
        }
        if (edad < 18) {
            respuesta.put("permitido", false);
            respuesta.put("mensaje", "Acceso denegado: debe ser mayor de edad");
            return respuesta;
        }
        if (!solicitud.isPago()) {
            respuesta.put("permitido", false);
            respuesta.put("mensaje", "Acceso denegado: falta pagar la entrada");
            return respuesta;
        }

        respuesta.put("permitido", true);
        respuesta.put("mensaje", "Acceso permitido, bienvenido al evento");
        return respuesta;
    }
}
