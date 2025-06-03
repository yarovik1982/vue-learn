.form-login {
   width: 100%;
   max-width: 500px;
   margin: 0 auto;
   padding: 2.5em;
   color: #1a1a1a;
   background: rgba(255, 255, 255, 0.95);
   border-radius: 16px;
   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(8px);
   -webkit-backdrop-filter: blur(8px);
}

.form-title {
   text-align: center;
   margin-bottom: 1.5em;
   font-size: 1.75em;
   font-weight: 600;
   color: #2d3748;
}

.form-body {
   display: flex;
   flex-direction: column;
   gap: 1.25em;
}

.form-input {
   margin-bottom: 1em;
}

.form-footer {
   margin-top: 2em;
}

.btn-submit {
   width: 100%;
   padding: 0.875em;
   border: none;
   border-radius: 8px;
   background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
   color: white;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
}

.btn-submit:hover {
   background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
   transform: translateY(-1px);
   box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.btn-submit:active {
   transform: translateY(0);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
   transition: background-color 5000s;
   -webkit-text-fill-color: #1a1a1a !important;
}

@media (max-width: 640px) {
   .form-login {
      padding: 1.5em;
      margin: 0 1em;
   }
   
   .form-title {
      font-size: 1.5em;
   }
} 