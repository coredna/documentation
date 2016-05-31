View page
=========

.. contents:: Table of Contents
   :depth: 4

Pages Class Listing

Here is a documentation listing of all of the classes and their respective .php files relating to the Pages module.

Page.php

This is the main Page module functionality.

Attributes
****************************************

*   ``$id`` - The database record ID. Can be accessed using the ``->getID()`` method.
*   ``$guid`` - The global identifier for the page. It is shared between sites which reference the same page. Can be accessed using the ``->getGuid()`` method.
*   ``$merchant_id`` - Merchant ID where the page belongs to. Can be accessed using the ``->getMerchantID()`` method.
*   ``$centre_id`` - The centre/website ID the page belongs to. Can be accessed using the ``->getCentreID()`` method.
*   ``$action`` - The page action type. Can be accessed using the ``->getAction()`` method.
*   ``$action_value`` - The page action value. Can be accessed using the ``->getActionValue()`` method.
*   ``$name`` - The name of the page. Can be accessed using the ``->getName()`` method.
*   ``$url_name`` - The page slug. Can be accessed using the ``->getUrlName()`` method.
*   ``$link_alt`` - *Deprecated. The page's link alt value. Can be accessed using the ``->getLinkAlt()`` method.*
*   ``$meta_description`` - The page's meta description. Can be accessed using the ``->getMetaDescription()`` method.
*   ``$meta_keywords`` - The page's meta keywords. Can be accessed using the ``->getMetaKeywords()`` method.
*   ``$heading`` - *Deprecated. The page's heading. Can be accessed using the ``->getHeading()`` method.*
*   ``$index`` - *Deprecated. The page's index number. Can be accessed using the ``->getIndex()`` method.*
*   ``$status`` - The page's publish status. Can be accessed using the ``->getStatus()`` method.
*   ``$publish`` - The page's publish on/off flag. Can be accessed using the ``->getPublish()`` method.
*   ``$parent_id`` - The page's parent ID. Can be accessed using the ``->getParentID()`` method.
*   ``$author`` - The page's author. Can be accessed using the ``->getAuthor()`` method.
*   ``$start_date`` - Deprecated. The starting date when the page will be available. Can be accessed using the ``->getStartDate()`` method.
*   ``$end_date`` - Deprecated. Can be accessed using the ``->getEndDate()`` method.
*   ``$modified_date`` - The date when the page was last updated. Can be accessed using the ``->getModifiedDate()`` method.
*   ``$locked`` - The lock on/off flag. Can be accessed using the ``->getLocked()`` method.
*   ``$inheritaccess`` - Flag whether to inherit the parent page's access level and parameters. Can be accessed using the ``->getInheritaccess()`` method.
*   ``$defaultaccess`` - The page's default access level. Can be accessed using the ``->getDefaultAccess()`` method.
*   ``$owner`` - The page's owner ID. Can be accessed using the ``->getOwner()`` method.
*   ``$title_tags`` - The page's title tags. Multiple tags are separated by comma. Can be accessed using the ``->getTitleTags()`` method. Currently being phased out in lieu of custom fields.
*   ``$alt_tags`` - The page's alt tags. Multiple tags are separated by comma. Can be accessed using the ``->getAltTags()`` method. Currently being phased out in lieu of custom fields.
*   ``$image1`` - A legacy-based image attachment. Can be accessed using the ``->getImage1()`` method.
*   ``$image2`` - A legacy-based image attachment. Can be accessed using the ``->getImage2()`` method.
*   ``$file1`` - A legacy-based file attachment. Can be accessed using the ``->getFile1()`` method.

__For more on Attachments and Content Linking, please consult the [[modules_page|Page Module Documentation]].__

Methods
****************************************

*   ``->getField(string)`` - Gets the page atribute value. Dynamic approach to the usual getter functions outlined above in the attributes. ``->getField('name')`` works the same as ``->getName()``, for example.
*   ``->getParentNew()`` - Gets the parent page's object. Returns a Page object.
*   ``->getHeading()`` - Gets the page's heading. Returns a string.
*   ``->getLocked()`` - Gets the page's lock field value. Returns an integer.
*   ``->show()`` - Returns all of the page attributes in an array.
*   ``->getPublish()`` - Gets the page's publish value. Returns a string.
*   ``->getInheritaccess()`` - Gets the page's inherit access flag. Returns an integer.
*   ``->getPathNew()`` - Get all of the page's ancestor pages. If you have a tree that goes ``Root -> Page1 -> Page2 (Current)``, it will return the page objects for Root, Page1, and Page2.
*   ``->getPathArray()`` - Get all of the page's ancestor pages, starting from the parent page. If you have a tree that goes ``Root -> Page1 -> Page2 (Current)``, it will return the page objects for Root and Page1.
*   ``->getTitleTags()`` - Gets the page title tags. Returns a string.
*   ``->getAltTags()`` - Gets the page alt tags. Returns a string.
*   ``->getTitleTag()`` -  Gets the page title tags. An alias of ``->getTitleTags()``.
*   ``->getAltTag()`` - Gets the page alt tags. An alias of ``->getAltTags()``.
*   ``->getChild()`` - Gets the child pages of the current page object. Returns an arary of child pages.
*   ``->getChildren()`` - Gets the child pages of the current page object. An alias of ``->GetChild()``
*   ``->getChildCount()`` - Gets the total number of subpages. Returns an integer.
*   ``->getNoOfChildren()`` - Gets the total number of subpages. An alias of ``->getChildCount()``.
*   ``->getSubpagesNew()`` - Gets the child pages of the current page object. An alias of ``->getChild()``.
*   ``->getSubpagesCount()`` - Gets the total number of subpages. Alias of 
*   ``->getLockingUserNew()`` - Gets the user who locked the page. Returns a boolean or an AuthUser object.
*   ``->isLockedNew()`` - Check if the page is locked. Returns a boolean.
*   ``->getLockingUserIDNew()`` - Get the ID of the user who locked the page. Returns an integer.
*   ``->getLockingUserNameNew()`` - Get the username of the user who locked the page. Returns a boolean or a string.
*   ``->getLockingUserEmailNew()`` - Get the email address of the user who locked the page. Returns a boolean or a string.
*   ``->isAncestorOf($page)`` - Check if the current page is the ancestor of the specified page. Parameters are the page object you intend to use, and returns a boolean.
*   ``->isParentOf($page)`` - Check if the page is the parent of the target page. Returns a boolean.
*   ``->getContentNew()`` - Get the page's content. Returns a string.
*   ``->getParagraph()`` - Get the page's paragraph object. Returns an object.
*   ``->getID()`` - Gets the page's record ID. Returns an integer.
*   ``->getGuid()`` - Gets the page's guid. Returns a string.
*   ``->getParentID()`` - Gets the page's parent ID. Returns an integer.
*   ``->getParent()`` - Gets the parent page's object. Returns a boolean or object.
*   ``->getMerchantID()`` - Gets a page's merchant ID. Returns an integer.
*   ``->getCentreID()`` - Gets a page's centre ID. Returns an integer.
*   ``->getAuthor()`` - Gets a page's author. Returns a string.
*   ``->getName()`` - Gets a page's name. Returns a string.
*   ``->getImage1()`` - Gets a legacy-based image attachment's filename. Returns a string.
*   ``->getImage2()`` - Gets a legacy-based image attachment's filename. Returns a string.
*   ``->getFile1()`` - Gets a legacy-based file attachment's filename. Returns a string.
*   ``->getAction()`` - Gets a page's action type. Returns a string.
*   ``->getActionValue()`` - Gets a page's action value. Returns a string.
*   ``->getMetaDescription()`` - Gets the page's meta description. Returns a string.
*   ``->getMetaKeywords()`` - Gets the page's meta keywords. Returns a string.
*   ``->getTitle()`` - Gets a page's meta title. 
*   ``->getUrlName()`` - Gets a page's permalink slug. Returns a string.
*   ``->getContent()`` - Gets the page's contents. Returns a string.
*   ``->getStatus()`` - Gets the page's status. Returns a string.
*   ``->getModifiedDate()`` - Gets the last modified date timestamp. Returns an integer.
*   ``->getOwner()`` - Gets the page owner. Returns an object.
*   ``->getDefaultAccess()`` - Gets the page's default access value. Returns an integer.
*   ``->inheritsAccess()`` - Check if a page inherit saccess from its parent. Returns an integer.
*   ``->isLocked()`` - Check if the page is locked. Returns a boolean.
*   ``->isRoot()`` - Determine if the page is the root page. Returns a boolean.
*   ``->getLockingUser()`` - Gets the user who locked the page. returns a boolean, or object.
*   ``->getLockingUserID()`` - Gets the locking user's ID. Used in conjuction with ``->getLockingUser``. Returns an integer.
*   ``->getLockingUserName()`` - Gets the username of the user who locked the page. Returns a boolean, or string.
*   ``->getLockingUserEmail()`` - Gets the email of the user who locked the page. Returns a boolean, or string.
*   ``->getSubPages($admin = false,$recursive = false)`` - Get the subpages of the current page. If ``$admin`` is set to true, the function will return ALL pages regardless of whether they are published or expired. If ``$recursive`` is set to true, it will get the subpages recursively. *This function method does NOT validate the user's access to a page.* Returns an array.
*   ``->getSubPagesSecure($user,$recursive = false,$inmenu = true)`` - Get the subpages of the current page the user has access to. The ``$user`` parameter is required. If ``$recursive`` is set to true, it will get the subpages recursively. ``$inmenu`` determines the page should be displayed in a menu under Publish Settings, or whether we don't care. Returns an array.
*   ``->getSubPage()`` - Gets the first subpage. Returns a Page object.
*   ``->getPath()`` - This function uses the method ``->getPath_r()``. Gets the page path in the page tree leading to the current page ID. Returns an array. Example: Root->Page1->CurrentPage.
*   ``->getPath_r($id,$path)`` - Get the page path tree leading to the specified page ``$id``. Returns an array. Example: Root->Page1->CurrentPage.
*   ``->getPageIndex($page_id)`` - Get the page ID's index number. Requires ``$page_id`` to be set.
*   ``->getOrderList()`` - Returns the subpages of the parent page. Returns an array.
*   ``->getOrder()`` - Gets the page's index number. Returns an integer.
*   ``->getMeta($field = '')`` - Gets the page's custom Meta object. The parameter ``$field`` is the name of the field you wish to use, as specified in the Site Maintenance module. Returns a string, or an object.
*   ``->getCustomFields()`` - Gets the custom fields for the Pages module. Returns an associative array of field names and their values.
*   ``->getCustomFieldByName($field_name)`` - Gets a specified custom field's data by ``$field_name``. Returns include strings, integers, or bools.
*   ``->getCustomFiles()`` - Gets custom files and their full paths. Returns an array.