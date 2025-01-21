import { definePreset } from '@primeng/themes';
import Nora from '@primeng/themes/nora';

const MyPreset = definePreset(Nora, {
    semantic: {
        primary: {
            50: '#f5f5f5',  // Gris muy claro
            100: '#e0e0e0',  // Gris claro
            200: '#bdbdbd',  // Gris claro medio
            300: '#9e9e9e',  // Gris medio
            400: '#757575',  // Gris oscuro medio
            500: '#616161',  // Gris principal
            600: '#424242',  // Gris oscuro
            700: '#303030',  // Gris muy oscuro
            800: '#212121',  // Gris muy oscuro
            900: '#121212',  // Gris casi negro
            950: '#0d0d0d'   // Gris casi negro muy oscuro
        },
        accent: {
            50: '#d0f0c0',  // Verde claro (acento)
            100: '#a1e8a0', // Verde más brillante
            200: '#78e080', // Verde medio
            300: '#50d060', // Verde un poco más oscuro
            400: '#28b840', // Verde brillante
            500: '#00a820', // Verde principal (accent)
            600: '#008e1c', // Verde más oscuro
            700: '#00751a', // Verde muy oscuro
            800: '#005c18', // Verde oscuro
            900: '#004513', // Verde muy oscuro
            950: '#003411'  // Verde casi negro
        },
        success: {
            50: '#e8f5e9',  // Verde muy claro
            100: '#c8e6c9', // Verde claro
            200: '#a5d6a7', // Verde medio
            300: '#81c784', // Verde más oscuro
            400: '#66bb6a', // Verde más brillante
            500: '#4caf50', // Verde principal (success)
            600: '#43a047', // Verde más oscuro
            700: '#388e3c', // Verde muy oscuro
            800: '#2c6e2e', // Verde oscuro
            900: '#1b5e20', // Verde muy oscuro
            950: '#134b16'  // Verde casi negro
        },
        info: {
            50: '#e3f2fd',  // Azul muy claro
            100: '#bbdefb', // Azul claro
            200: '#90caf9', // Azul medio
            300: '#64b5f6', // Azul más oscuro
            400: '#42a5f5', // Azul brillante
            500: '#2196f3', // Azul principal (info)
            600: '#1e88e5', // Azul más oscuro
            700: '#1976d2', // Azul muy oscuro
            800: '#1565c0', // Azul oscuro
            900: '#0d47a1', // Azul muy oscuro
            950: '#0b38a1'  // Azul casi negro
        },
        warning: {
            50: '#fff9c4',  // Amarillo muy claro
            100: '#fff59d', // Amarillo claro
            200: '#fff176', // Amarillo medio
            300: '#ffee58', // Amarillo más oscuro
            400: '#ffeb3b', // Amarillo brillante
            500: '#fbc02d', // Amarillo principal (warning)
            600: '#f9a825', // Amarillo más oscuro
            700: '#f57f17', // Amarillo muy oscuro
            800: '#ef6c00', // Amarillo oscuro
            900: '#e65100', // Amarillo muy oscuro
            950: '#d43d00'  // Amarillo casi negro
        },
        danger: {
            50: '#ffebee',  // Rojo muy claro
            100: '#ffcdd2', // Rojo claro
            200: '#ef9a9a', // Rojo medio
            300: '#e57373', // Rojo más oscuro
            400: '#ef5350', // Rojo brillante
            500: '#f44336', // Rojo principal (danger)
            600: '#e53935', // Rojo más oscuro
            700: '#d32f2f', // Rojo muy oscuro
            800: '#c62828', // Rojo oscuro
            900: '#b71c1c', // Rojo muy oscuro
            950: '#a21010'  // Rojo casi negro
        },
        surface: {
            default: '#e5e5e5',  // Zinc claro
            paper: '#d4d4d4',    // Zinc más oscuro
            border: '#bdbdbd'    // Zinc intermedio
        }
    }
});

export default MyPreset;
