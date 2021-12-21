<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <div align="center" class="w-100">
              <Link :href="route('home')" class="logo-footer">
                <img src="/images/logo-light-short.png" height="40" alt="" />
              </Link>  
            </div>
            <p class="mt-4">
              Conectando a personas con los mismos valores y distintas necesidades.
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Nuestra Empresa</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <Link to="/page-aboutus" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Quienes Somos</Link
                >
              </li>
              <li>
                <Link to="/page-services" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Categorias</Link
                >
              </li>
              <li>
                <Link to="/page-team" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Blog</Link
                >
              </li>
              <li>
                <Link :href="route('login')" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Acceso</Link
                >
              </li>
              <li>
                <Link :href="route('register')" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Registro</Link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Links de ayuda</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <Link to="/page-terms" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Terminos y Condiciones</Link
                >
              </li>
              <li>
                <Link to="/page-privacy" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Soporte</Link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Boletin informativo</h5>
            <p class="mt-4">Regístrese y reciba los últimos consejos por correo electrónico.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe form-group">
                    <label
                      >Tu Email
                      <span class="text-danger">*</span></label
                    >
                    <div class="position-relative">
                      <input
                        type="email"
                        name="email"
                        id="emailsubscribe"
                        class="form-control pl-5 rounded"
                        placeholder="Email : "
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input
                    type="submit"
                    id="submitsubscribe"
                    name="send"
                    class="btn btn-soft-primary btn-block"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <!--end footer-->
  </div>
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3';
export default {
  
  data() {
    return {};
  },
  components: {
    Link
  },
  
};
</script>
