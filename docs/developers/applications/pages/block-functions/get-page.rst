Page Block Function Listing
**********************************

__TOC

Here is a documentation listing of all of the block functions and their respective .php files relating to the Page module.

get_retail_menu
------------------------------------------------

This block function displays retail pages for a menu.

.. code-block:: smarty
    :linenos:

	<{show_block module='page'
	block='get_retail_menu'
	merchant_id=123
	template_name='retail_menu'}>


Input and Parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*   ``merchant_id`` - The retailer or merchant ID.
*   ``template_name`` - Name of the template (minus .html suffix) located in ``/modules/page/templates/.``, used to render the page information. If no value is specified, the template ``retail_menu`` will be used.
*   ``no_template`` - This parameter allows the function to initialise the block function variables instead of displaying the template contents. Accepts '1', or empty. Optional.

Output
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*No output is given in the documentation.*

The output is the retail page's contents and subpages in an array, to be used as a menu.

block\_get\_page.php
------------------------------------------------

This block function displays a single page by Page ID or retailer.

.. code-block:: smarty
    :linenos:

	<{show_block module='page'
	block='get_page'
	page_id=1234
	merchant_id=$retailer.id
	page_index=0
	page_status='published'
	check_access='true'
	cache_name='test'
	template_name='block_page'}>


Input and Parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*   ``page_id`` - The ID of the page to display. Mandatory unless ``merchant_id`` is set. If ``page_id`` is set, ``merchant_id`` and ``page_index`` are ignored.
*   ``merchant_id`` - ID of the retailer to whom the page belongs. Mandatory and usable if ``page_id`` is not set.
*   ``page_index`` - The index of the retailer's page to display. Optional, will default to 0. (Home page)
*   ``page_status`` - Status of the page. Default is that it lists all pages except for deleted ones. Optional.
*   ``check_access`` - Checks the access of the page. If it is set to 'true', then all pages with a minimum access of READ will be rendered, otherwise it will grab any page. Optional.
*   ``cache_name`` - Custom cache key. If not specified, one will be automatically generated.
*   ``template_name`` - Name of the template (minus .html suffix) located in ``/modules/page/templates/.``, used to render the page information. If no value is specified, the template ``block_page`` will be used.

Output
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

``$apage`` - The page object, with all data associated with the page. The content can be retrieved in Smarty by using ``$apage->getContent()``.

block\_get\_pages\_by\_customfield.php
------------------------------------------------

This block function grabs pages which match custom field criteria specified in the call.

.. code-block:: smarty
    :linenos:

	<{show_block module='page' block='get_pages_by_customfield'
	customfield_name='My Customfield'
	customfield_value='me'
	merchant_id=$retailer.id
	page_status='published'
	check_access='true'
	template_name='block_pages'
	order_by='page_id ASC'}>


Input and Parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*   ``customfield_name`` - The name of the custom field to search. Mandatory.
*   ``customfield_value`` - The value in the previously specified custom field to search. Mandatory.
*   ``merchant_id`` - ID of the retailer to whom the page belongs. Mandatory and usable if ``page_id`` is not set.
*   ``page_status`` - The status of the pages to be returned. By default, it will return all pages except those which have been deleted.
*   ``check_access`` - Check access of the page. If set to ``true``, it will display all published pages with an authority of Read or above. If omitted or set to ``false``, all pages will display.
*   ``template_name`` - Name of the template (minus .html suffix) located in ``/modules/page/templates/.``, used to render the page information. If no value is specified, no template will be rendered but data will still pass.
*   ``order_by`` - Dictates which Page attribute will be used to sort the entries. Optional, defaults to using the ``id``. Use the attributes in the [[classes_page|Classes documentation]] to help you sort.

Output
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*   ``$pages`` - An array of page objects.

block\_get\_pages\_by\_createdate.php
------------------------------------------------

This block function grabs pages and orders them by their date of creation. A category can be specified to narrow the search down.

.. code-block:: smarty
    :linenos:

	<{show_block module='page' block='get_pages_by_createdate'
	category_id=1234
	per_page=10
	start=0
	template_name='tmpl_name'}>


Input and Parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*   ``category_id`` - Limits results to pages specified by a parent ID. The parent page itself will not be included in the output. Optional.
*   ``per_page`` - . Optional, defaults to 10.
*   ``start`` - Specifies the offset from the first result to display. Optional, defaults to 0.
*   ``template_name`` - Name of the template (minus .html suffix) located in ``/modules/page/templates/.``, used to render the pages. Defaults to ``block_page.html``.

Output
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*   ``$pages`` - An array of page objects.