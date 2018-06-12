             <div id="sidebar-nav" class="sidebar">
            <div class="sidebar-scroll">
                <nav>
                    <ul class="nav">
                        <li>
                            <a href="index.html" class="active"><i class="lnr lnr-home"></i> <span>Inicio</span></a>

                        </li>
                       <li>
                            <a href="#subPages1" data-toggle="collapse" class="collapsed"><i class="lnr lnr-alarm"></i> <span>Notificaciones</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages1" class="collapse ">
                                <ul class="nav">
                                    <li  @click="menu=0"><a href="#" class="collapsed">Ver notificaciones</a></li>

                                </ul>
                            </div>
                        </li>
                      <li>
                            <a href="#subPages2" data-toggle="collapse" class="collapsed"><i class="lnr lnr-store"></i> <span>Area de cocina</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages2" class="collapse ">
                                <ul class="nav">
                                    <li @click="menu=1" ><a href="#" class="">ver herramienta</a></li>
                                    <li @click="menu=2"><a href="#" class="">ver equipos</a></li>

                                </ul>
                            </div>
                        </li>
                   <li>
                            <a href="#subPages3" data-toggle="collapse" class="collapsed"><i class="fa fa-glass"></i> <span>Cristaleria</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages3" class="collapse ">
                                <ul class="nav">
                                    <li  @click="menu=0"><a href="#" class="">Ver cristaleria</a></li>

                                </ul>
                            </div>
                        </li>
                     <li>
                            <a href="#subPages4" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>Mueble</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages4" class="collapse ">
                                <ul class="nav">
                                    <li  @click="menu=0"><a href="#" class="">Ver mueble</a></li>

                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#subPages5" data-toggle="collapse" class="collapsed"><i class="lnr lnr-dinner"></i> <span>Cuberteria</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages5" class="collapse ">
                                <ul class="nav">
                                    <li  @click="menu=0"><a href="#" class="">Ver cubiertos</a></li>

                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#subPages6" data-toggle="collapse" class="collapsed"><i class="lnr lnr-magic-wand"></i> <span>Limpieza</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages6" class="collapse ">
                                <ul class="nav">
                                    <li  @click="menu=0"><a href="#" class="">Ver herramienta de limpieza</a></li>

                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#subPages7" data-toggle="collapse" class="collapsed"><i class="lnr lnr-cross-circle"></i> <span>Piezas danadas</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages7" class="collapse ">
                                <ul class="nav">
                                    <li  @click="menu=0"><a href="#" class="">Ver piezas danadas</a></li>

                                </ul>
                            </div>
                        </li>
                      <li>
                            <a href="#subPages8" data-toggle="collapse" class="collapsed"><i class="lnr lnr-chart-bars"></i> <span>Periodo de registro</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                            <div id="subPages8" class="collapse ">
                                <ul class="nav">
                                    <li  @click="menu=0"><a href="#" class="">Ver registros por periodo</a></li>

                                </ul>
                            </div>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
