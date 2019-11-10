<template>
    <section class="contact" id="contact">
        <div class="container">
            <div class="section-title">
                <h2>
                    <span>Contact </span>
                    <span>Me</span>
                </h2>
            </div>
            <div class="contact-form">
                <form name="contact" method="POST" netlify netlify-honeypot="dontfill" data-netlify-recaptcha="true" id="contactForm">
                    <div class="hidden" hidden style="display: none !important;">
                        <label for="dontfill">Don't fill out this field - it's for bot filtering:</label>
                        <input type="text" id="dontfill" name="dontfill">
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input type="text" class="form-control" id="name" name="name" placeholder="Name" required autocomplete="name">
                            <label for="name">Name</label>
                        </div>
                        <div class="form-label-group">
                            <input type="email" class="form-control" id="email" name="email" placeholder="email@example.com" required autocomplete="email">
                            <label for="email">Email Address</label>
                        </div>
                        <div class="form-label-group">
                            <textarea id="message" class="form-control" rows="3" name="message" placeholder="Message" required></textarea>
                            <label for="message">Message</label>
                        </div>
                        <div data-netlify-recaptcha="true" class="recaptcha"></div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        
    });
</script>

<style lang="scss">
    .contact {
        text-align: left;
        .recaptcha {
            margin-bottom: 1rem;
        }

        .form-label-group {
            position: relative;
            margin-bottom: 1rem;
            > input, > label {
                height: 3.125rem;
                padding: 0.75rem;
            }
            > textarea ~ label{
                padding-top: 0.25rem;
            }
            > label {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                margin-bottom: 0;
                line-height: 1.5;
                color: #495057;
                pointer-events: none;
                cursor: text;
                border: 1px solid transparent;
                border-radius: 0.25rem;
                transition: all 0.25s ease-out;
            }

            input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
                color: transparent;
            }
            
            input:-ms-input-placeholder, textarea:-ms-input-placeholder {
                color: transparent;
            }
            
            input::-ms-input-placeholder, textarea::-ms-input-placeholder {
                color: transparent;
            }
            
            input::-moz-placeholder, textarea::-moz-placeholder {
                color: transparent;
            }
            
            input::placeholder, textarea::placeholder {
                color: transparent;
            }
            
            input:not(:placeholder-shown), textarea:not(:placeholder-shown) {
                padding-top: 1.25rem;
                padding-bottom: 0.25rem;
                ~ label {
                    padding-top: 0.25rem;
                    padding-bottom: 0.25rem;
                    font-size: 12px;
                    color: #777;
                }
            }
            
            .form-control {
                border-radius: 0;
                border-bottom: 3px solid $primary;
                &.hadFocus:not(:valid):not(:focus) {
                    border-color: $danger;
                }
            }
        }

        /* Fallback for Edge
        -------------------------------------------------- */

        @supports (-ms-ime-align: auto) {
            .form-label-group>label {
                display: none;
            }
            .form-label-group input::-ms-input-placeholder {
                color: #777;
            }
        }

        /* Fallback for IE
        -------------------------------------------------- */

        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
            .form-label-group>label {
                display: none;
            }
            .form-label-group input:-ms-input-placeholder {
                color: #777;
            }
        }
    }
</style>