import os
import datetime

def generar_snapshot_proyecto(directorio_raiz, archivo_salida):
    """
    Recorre un directorio de proyecto y guarda la estructura y el contenido
    de los archivos de texto relevantes en un único archivo de salida.
    """
    
    # --- CONFIGURACIÓN ---
    # Extensiones de archivo que queremos incluir en el snapshot.
    # Ignoramos imágenes, videos, etc., para mantener el archivo manejable.
    extensiones_incluidas = ['.js', '.jsx', '.css', '.html', '.json', '.md']
    
    # Directorios que queremos ignorar por completo.
    # 'node_modules' es crucial ignorarlo, ya que contiene miles de archivos.
    directorios_ignorados = {'node_modules', '.git', 'dist', '.vscode', '__pycache__'}
    
    print(f"Iniciando snapshot del proyecto en: {os.path.abspath(directorio_raiz)}")
    
    try:
        with open(archivo_salida, 'w', encoding='utf-8') as f_out:
            # Escribimos una cabecera en el archivo de snapshot
            f_out.write(f"Snapshot del Proyecto: {os.path.basename(directorio_raiz)}\n")
            f_out.write(f"Generado el: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f_out.write("="*80 + "\n\n")

            for dirpath, dirnames, filenames in os.walk(directorio_raiz):
                # Modificamos 'dirnames' in-place para evitar descender a directorios ignorados
                dirnames[:] = [d for d in dirnames if d not in directorios_ignorados]
                
                for filename in filenames:
                    # Verificamos si la extensión del archivo está en nuestra lista blanca
                    if any(filename.endswith(ext) for ext in extensiones_incluidas):
                        ruta_completa = os.path.join(dirpath, filename)
                        ruta_relativa = os.path.relpath(ruta_completa, directorio_raiz)
                        
                        print(f"Procesando: {ruta_relativa}")
                        
                        try:
                            with open(ruta_completa, 'r', encoding='utf-8') as f_in:
                                contenido = f_in.read()
                            
                            # Escribimos el delimitador y la ruta del archivo
                            f_out.write(f"--- START OF FILE {ruta_relativa.replace(os.sep, '/')} ---\n\n")
                            # Escribimos el contenido del archivo
                            f_out.write(contenido)
                            # Escribimos el delimitador de fin de archivo
                            f_out.write(f"\n\n--- END OF FILE {ruta_relativa.replace(os.sep, '/')} ---\n\n")
                            f_out.write("="*80 + "\n\n")
                            
                        except Exception as e:
                            print(f"  ERROR: No se pudo leer el archivo {ruta_completa}. Causa: {e}")

        print(f"\n¡Éxito! Snapshot del proyecto guardado en: {archivo_salida}")

    except Exception as e:
        print(f"\nERROR: Ocurrió un error general al crear el snapshot. Causa: {e}")

if __name__ == "__main__":
    # El script se ejecuta desde la raíz del proyecto
    directorio_proyecto = '.' 
    nombre_archivo_salida = 'project_snapshot.txt'
    generar_snapshot_proyecto(directorio_proyecto, nombre_archivo_salida)