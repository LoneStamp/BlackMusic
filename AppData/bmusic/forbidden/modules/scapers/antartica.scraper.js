
This is Web block based Web server.

Some Ada files are generated directly from the HTML template
documents. So it is required to run the following command before
compiling the project:

   $ make gen

The files are generated under tsrc directory.

This project is composed of a main page and a single COUNTER block. This
block displays a simple integer value and a button. Each time the button is
pressed the value is incremented by one.


Conventions used in this project:

   - Block template files are named: widget_<name>.thtml

   - Block tags are named:           @_LAZY_WIDGET_<name>_@

     For each block tags a callback must be provided into
     the package Bvideo_Server.Web_Blocks.

     The callback spec must be:

       procedure Widget_<name>
         (Request      : in              Status.Data;
          Context      : not null access Web_Block.Context.Object;
          Translations : in out          Templates.Translate_Set);

   - For each Ajax call a corresponding callback must be provided into
     the package Bvideo_Server.Ajax.

     The callback spec must be:

       procedure <action>_<widget_id>
         (Request      : in              Status.Data;
          Context      : not null access Web_Block.Context.Object;
          Translations : in out          Templates.Translate_Set);

   - Ajax response file are named:   r_widget_<name>.txml
